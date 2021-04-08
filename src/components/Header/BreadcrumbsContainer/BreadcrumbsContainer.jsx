import React from "react";
import { Breadcrumbs, Link } from "@material-ui/core";
import "./BreadcrumbsContainer.scss";

const BreadcrumbsContainer = (props) => {
  return (
    <div className="breadcrumbs__container">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          href="/"
          //   onClick={handleClick}
        >
          Material-UI
        </Link>
        <Link
          color="inherit"
          href="/getting-started/installation/"
          //   onClick={handleClick}
        >
          Core
        </Link>
        <Link
          color="textPrimary"
          href="/components/breadcrumbs/"
          // onClick={handleClick}
          aria-current="page"
        >
          Breadcrumb
        </Link>
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumbsContainer;
