import React from "react";
import "./ViewSelector.scss";

const ViewSelector = (props) => {
  const viewFunc = () => {
    let $grid = document.querySelector("#grid");
    let $inline = document.querySelector("#inline");
    let val = $grid.checked;
    $grid.checked = !val;
    $inline.checked = val;
    props.changeView();
  };
  return (
    <div className="view_selector">
      <div className="veiwselector_block">
        <input
          id="grid"
          type="radio"
          name="viewselector"
          defaultChecked
          value="Grid view"
        />
        <label className="grid" htmlFor="grid" onClick={viewFunc}>
          {" "}
          Grid view{" "}
        </label>
      </div>
      <div className="veiwselector_block">
        <input id="inline" type="radio" name="viewselector" value="list view" />
        <label className="inline" htmlFor="inline" onClick={viewFunc}>
          {" "}
          List view{" "}
        </label>
      </div>
      <div className="products_block">
        <div className="products_block__count">{props.count}</div>
        <p>Products</p>
      </div>
    </div>
  );
};

export default ViewSelector;
