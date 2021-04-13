import { Rating } from "@material-ui/lab";
import React from "react";
import Button from "../../components/Button/Button";
import Title from "../../components/Filters/Title/Title";
import ProductItem from "../../components/ProductItem/ProductItem";
import styles from "./ProductPage.module.scss";

const ProductPage = (props) => {
  let data = [
    { SKU: 7645 },
    { Category: "Vegetables" },
    { Stock: "In Stock" },
    { Farm: "Gorecery Tarm Fields" },
    { SKU: 7645 },
    { Category: "Vegetables" },
    { Stock: "In Stock" },
    { Farm: "Gorecery Tarm Fields" },
  ];

  const tableData = [
      ['VItamin A equiv.', '735 mg', '104%'],
      ['VItamin A equiv.', '735 mg', '104%'],
      ['VItamin A equiv.', '735 mg', '104%'],
      ['VItamin A equiv.', '735 mg', '104%'],
      ['VItamin A equiv.', '735 mg', '104%'],
      ['VItamin A equiv.', '735 mg', '104%'],
      ['VItamin A equiv.', '735 mg', '104%'],
  ]

 const tableRows = tableData.map((element,index) => {
     return(
        <div className={styles.table_row} key={index}>
            <div className={styles.param}>{element[0]}</div>
            <div className={styles.param}>{element[1]}</div>
            <div className={styles.param}>{element[2]}</div>
        </div>
     )
 }) 

  let ParametersList = data.map((obj) => {
    return Object.entries(obj).map((element, index) => {
      return (
        <li className={styles.listItem} key={index}>
          {element[0]} :
          <span className={styles.item_value}>{element[1]}</span>
        </li>
      );
    });
  });

  return (
    <>
      <div className={styles.product_page}>
        <div className={styles.images_block}>
          <div className={styles.image_item_container}>
            <img src="" alt="" />
          </div>
          <div className={styles.image_item_container}>
            <img src="" alt="" />
          </div>
          <div className={styles.image_item_container}>
            <img src="" alt="" />
          </div>
        </div>
        <div className={styles.description_block}>
          <Title fontSize="32px">Carrots from Tomissy Farm</Title>
          <div className={styles.rating_block}>
            <Rating name="read-only" value={3} readOnly />
            <span className={styles.rating_span}>(1 customer review)</span>
          </div>
          <p className={styles.description}>
            Carrots from Tomissy Farm are one of the best on the market. Tomisso
            and his family are giving a full love to his Bio products. Tomisso’s
            carrots are growing on the fields naturally.
          </p>
          <ul className={styles.parameters}>{ParametersList}</ul>
          <div className={styles.buttons_block}>
            <span className={styles.price}>36.23 USD</span>
            <input className={styles.input} type="number" />
            <Button value=" + Add to cart" />
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.1835 8.15008C23.7748 6.55878 25.9331 5.66479 28.1835 5.66479C30.4339 5.66479 32.5922 6.55878 34.1835 8.15008C35.7748 9.74137 36.6688 11.8996 36.6688 14.1501C36.6688 16.4005 35.7748 18.5588 34.1835 20.1501L32.0002 22.3334L20.0002 34.3334L8.00016 22.3334L5.81682 20.1501C4.22553 18.5588 3.33154 16.4005 3.33154 14.1501C3.33154 11.8996 4.22553 9.74137 5.81682 8.15008C7.40812 6.55878 9.56639 5.66479 11.8168 5.66479C14.0673 5.66479 16.2255 6.55878 17.8168 8.15008L20.0002 10.3334L22.1835 8.15008Z"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.8333 23.3335H9.16659C7.32564 23.3335 5.83325 24.8259 5.83325 26.6668V33.3335C5.83325 35.1744 7.32564 36.6668 9.16659 36.6668H15.8333C17.6742 36.6668 19.1666 35.1744 19.1666 33.3335V26.6668C19.1666 24.8259 17.6742 23.3335 15.8333 23.3335Z"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.1665 26.667H24.1665"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.8332 33.3335H24.1665"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M30.8332 13.3335H24.1665"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M34.1665 6.66699H24.1665"
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Compare
            </p>
          </div>
          <div className={styles.bzhu}>
            <p className={styles.title}>Origins</p>
            <p className={styles.parag}>
              We work hard to ensure that the fruit and vegetables we sell are
              fresh and high in quality. If we don’t grow them ourselves, we
              source them from carefully chosen suppliers, preferring to buy
              locally whenever possible.
            </p>
            <p className={styles.title}>How to cook</p>
            <p className={styles.parag}>
              From roasts, salads and soups to casseroles and cakes, Carrots
              will lend sweetness, texture and colour to an enormous number of
              recipes.
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
        <div className ={styles.related_title_row}>
            <Title>Related products</Title>
            <Button value="More products >" bg="white" border="none" cl="black"/>
        </div>
        <div className={styles.product_block}>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
