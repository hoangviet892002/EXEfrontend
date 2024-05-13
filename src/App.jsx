import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import configureStore from "./redux/store/configureStore";
import Routes from "./routers";

function App() {
  const store = configureStore();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Provider store={store}>
        <ToastContainer />
        <Routes />
      </Provider>
    </div>
  );
}

export default App;
