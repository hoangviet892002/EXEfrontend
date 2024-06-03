import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeMenu } from "../../../redux/actions/megaMenuAction";
import { CategoryService } from "../../../services";

const useHook = () => {
  const wishList = useSelector((state) => state.wish.wishlist);
  const listCart = useSelector((state) => state.cart.items);
  const megaMenu = useSelector((state) => state.menu.categories);

  const dispatch = useDispatch();
  const fetchMegaMenu = async () => {
    const response = await CategoryService.getMegaMenu();

    dispatch(storeMenu(response));
  };
  useEffect(() => {
    fetchMegaMenu();
  }, []);

  return { megaMenu, wishList, listCart };
};

export default useHook;
