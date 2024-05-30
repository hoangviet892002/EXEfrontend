import { createStore } from "redux";
import rootReducer from "../reducers";

// Function to load state from local storage
function loadState() {
  try {
    const serializedState = localStorage.getItem("reduxState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
}

// Function to save state to local storage
function saveState(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (err) {
    // Ignore write errors
  }
}

export default function configureStore() {
  const initialState = loadState();
  const store = createStore(
    rootReducer,
    initialState
    // Add any middleware here
  );

  // Subscribe to store changes and save state to local storage
  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
}
