import React from "react";
import "./PaginationSection.scss";

const PaginationSection = (props) => {
  let totalProductsCount = props.count;
  let pageSize = 9;
  let pagesCount = Math.ceil(totalProductsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let paginationItems = pages.map((p, i) => {
    return (
      <li
        key={i}
        className={`${
          props.currentPage === p
            ? "pagination_item pagination_item--active"
            : "pagination_item"
        }`}
        onClick={() => props.changePageFunc(p)}
      >
        {p}
      </li>
    );
  });

  return (
    <div className="pagination_section">
      <div className="pagination_block">
        <p>Pages:</p>
        <ul className="pagination_list">{paginationItems}</ul>
      </div>
      <div className="products_block">
        <div className="products_block__count">{props.count}</div>
        <p>Products</p>
      </div>
    </div>
  );
};

export default PaginationSection;
