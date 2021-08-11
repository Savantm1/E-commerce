import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/CategoriesSlice";
import Menu from "./Menu";

const MenuContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categoriesArray = useSelector((state) => state.categories.categories);

  return <Menu categories={categoriesArray} />;
};

export default MenuContainer;
