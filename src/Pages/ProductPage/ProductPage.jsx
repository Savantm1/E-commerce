import { Rating } from "@material-ui/lab";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Title from "../../components/Filters/Title/Title";
import ProductItem from "../../components/ProductItem/ProductItem";
import styles from "./ProductPage.module.scss";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/CartSlice";

const ProductPage = (props) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const addToCartFunc = (evt) => {
    const imgURL = `http://localhost:7000/products/${props.productData.category.category_name}/${props.productData.pictures[0].image_name}`;

    const productDataForCart = {
      productName: props.productData.productName,
      price: props.productData.price,
      img: imgURL,
      count: count,
      rating: props.productData.rating,
      id: props.productData.id,
      subtitle: props.productData.subhead,
    };
    evt.preventDefault();
    dispatch(addProductToCart(productDataForCart));
  };

  let data = [
    { SKU: 7645 },
    { Category: "Vegetables" },
    { Stock: "In Stock" },
    { Farm: "Gorecery Tarm Fields" },
    { SKU: 7645 },
    { Category: "Vegetables" },
    { Stock: "In Stock" },
  ];

  const tableData = [
    ["VItamin A equiv.", "735 mg", "104%"],
    ["VItamin A equiv.", "735 mg", "104%"],
    ["VItamin A equiv.", "735 mg", "104%"],
    ["VItamin A equiv.", "735 mg", "104%"],
    ["VItamin A equiv.", "735 mg", "104%"],
    ["VItamin A equiv.", "735 mg", "104%"],
    ["VItamin A equiv.", "735 mg", "104%"],
  ];

  const tableRows = tableData.map((element, index) => {
    return (
      <div className={styles.table_row} key={index}>
        <div className={styles.param}>{element[0]}</div>
        <div className={styles.param}>{element[1]}</div>
        <div className={styles.param}>{element[2]}</div>
      </div>
    );
  });

  const ParametersList = data.map((obj) => {
    return Object.entries(obj).map((element, index) => {
      return (
        <li className={styles.listItem} key={index}>
          {element[0]} :<span className={styles.item_value}>{element[1]}</span>
        </li>
      );
    });
  });
  const productsArray = props.products
    .filter((element, index) => index < 5)
    .map((element, i) => {
      return (
        <ProductItem
          productData={element}
          category={props.category}
          key={i}
          addProduct={props.addProduct}
        />
      );
    });

  // const category = props.productData.categoryName ? props.productData.categoryName : props.category;

  let imagesArray;

  if (props.productData.pictures) {
    imagesArray = props.productData.pictures.map((pic, index) => {
      return (
        <div key={index} className={styles.image_item_container}>
          <img
            src={`http://localhost:7000/products/${props.productData.category.category_name}/${pic.image_name}`}
            alt="image_product"
          />
        </div>
      );
    });
  }

  return (
    <>
      <div className={styles.product_page}>
        <div className={styles.images_block}>{imagesArray}</div>
        <div className={styles.description_block}>
          <Title fontSize="2rem">{props.productData.productName}</Title>
          <div className={styles.rating_block}>
            <Rating
              name="read-only"
              value={props.productData.rating ? props.productData.rating : 0}
              readOnly
            />
            <span className={styles.rating_span}>(1 customer review)</span>
          </div>
          <ImageCarousel />
          <p className={styles.description}>
            {props.productData ? props.productData.subtitle : "subtitle"}
          </p>
          <ul className={styles.parameters}>{ParametersList}</ul>
          <div className={styles.buttons_block}>
            <span className={styles.price}>{props.productData.price} USD</span>
            <input
              className={styles.input}
              type="number"
              onChange={(event) => {
                setCount(event.target.value);
              }}
              value={count}
            />
            <Button onClick={addToCartFunc} value=" + Add to cart" />
          </div>
          <div className={styles.favorite_block}>
            <p className={styles.add_wish}>
              <svg
                className={styles.heart}
                width="20"
                height="20"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.1835 8.15008C23.7748 6.55878 25.9331 5.66479 28.1835 5.66479C30.4339 5.66479 32.5922 6.55878 34.1835 8.15008C35.7748 9.74137 36.6688 11.8996 36.6688 14.1501C36.6688 16.4005 35.7748 18.5588 34.1835 20.1501L32.0002 22.3334L20.0002 34.3334L8.00016 22.3334L5.81682 20.1501C4.22553 18.5588 3.33154 16.4005 3.33154 14.1501C3.33154 11.8996 4.22553 9.74137 5.81682 8.15008C7.40812 6.55878 9.56639 5.66479 11.8168 5.66479C14.0673 5.66479 16.2255 6.55878 17.8168 8.15008L20.0002 10.3334L22.1835 8.15008Z"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Add to my wish list
            </p>
            <p className={styles.compare}>
              <svg
                className={styles.compare_svg}
                width="20"
                height="20"
                viewBox="0 0 40 40"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.8333 3.3335H9.16659C7.32564 3.3335 5.83325 4.82588 5.83325 6.66683V13.3335C5.83325 15.1744 7.32564 16.6668 9.16659 16.6668H15.8333C17.6742 16.6668 19.1666 15.1744 19.1666 13.3335V6.66683C19.1666 4.82588 17.6742 3.3335 15.8333 3.3335Z"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.8333 23.3335H9.16659C7.32564 23.3335 5.83325 24.8259 5.83325 26.6668V33.3335C5.83325 35.1744 7.32564 36.6668 9.16659 36.6668H15.8333C17.6742 36.6668 19.1666 35.1744 19.1666 33.3335V26.6668C19.1666 24.8259 17.6742 23.3335 15.8333 23.3335Z"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.1665 26.667H24.1665"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.8332 33.3335H24.1665"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.8332 13.3335H24.1665"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M34.1665 6.66699H24.1665"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Compare
            </p>
          </div>
          <div className={styles.bzhu}>
            <p className={styles.title}>Origins</p>
            <p className={styles.parag}>
              {props.productData.description
                ? props.productData.description
                : "subtitle"}
            </p>
            <p className={styles.title}>How to cook</p>
            <p className={styles.parag}>
              {props.productData.description
                ? props.productData.description
                : "subtitle"}
            </p>
            <p className={styles.title}>Full if Vitamins!</p>
            <div className={styles.table}>
              <div className={styles.table_row}>
                <div className={styles.param}>Vitamins</div>
                <div className={styles.param}>Quantity</div>
                <div className={styles.param}>% DV</div>
              </div>
              {tableRows}
            </div>
          </div>
        </div>
      </div>
      <section className={styles.related}>
        <div className={styles.related_title_row}>
          <Title margin="1rem 0">Related products</Title>
          <Button value="More products >" bg="white" border="none" cl="black" />
        </div>
        <div className={styles.product_block}>{productsArray}</div>
      </section>
    </>
  );
};

export default ProductPage;
