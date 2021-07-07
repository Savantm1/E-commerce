import { Breadcrumbs} from "@material-ui/core";
import "./BreadcrumbsContainer.scss";
import { withRouter } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const BreadcrumbsContainer = (props) => {

    const category = useSelector(state => state.category.categoryProducts.category_name)
    const product = useSelector(state => state.product.product.productName)
    const productId = useSelector(state => state.product.product.id)
  
  return (
    <div className="breadcrumbs__container">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          to={`/category/${category}`}
        >
          {category}
        </Link>
        <Link
          color="inherit"
          to={`/category/${category}/product/${productId}`}
        >
          {product}
        </Link>
      </Breadcrumbs>
    </div>
  );
};

const BreadcrumbWithUrl = withRouter(BreadcrumbsContainer);
export default BreadcrumbWithUrl;
