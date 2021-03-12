import React from "react";
import Tag from "./Tag/Tag";
import styles from "./Tags.module.scss";

const tagsArray = [
  "Beans",
  "Carrots",
  "Apples",
  "Garlic",
  "Mushrooms",
  "Tomatoes",
  "Chilli peppers",
  "Broccoli",
  "Watermellons",
  "Oranges",
  "Bananas",
  "Grapes",
  "Cherries",
  "Meat",
  "Sea tag",
  "Fresh food",
  "Lemons",
];

let tags = tagsArray.map((element, index) => {
  return <Tag name={element} key={index} />;
});

const Tags = (props) => {
  return (
    <div>
      <p className={styles.title}>Product tags</p>
      <div className={styles.tags_row}>{tags}</div>
    </div>
  );
};

export default Tags;
