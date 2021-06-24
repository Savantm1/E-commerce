import React from "react";
import Title from "../Filters/Title/Title";
import BlogBigItem from "./BlogBigItem/BlogBigItem";
import BlogMidItem from "./BlogMidItem/BlogMidItem";
import bigItemImg from "./../../assets/img/Rectangle 26.png";
import avatar from "./../../assets/img/Ellipse 3.png";
import postImg from "../../assets/img/Rectangle 26-2 s.png";
import "./BlogSection.scss";
import BlogSmallItem from "./BlogSmallItem/BlogSmallItem";
import smPostImg from "../../assets/img/Rectangle 26-1.png";
import { useSelector } from "react-redux";

const BlogSection = (props) => {
  const blogItemsArr = useSelector((state) => state.blog.blog);
  debugger;

  const blogMidArr = blogItemsArr.map((element, index) => {
    if (index === 3) {
      debugger;
      return (
        <BlogMidItem
          key={index}
          bgImg={bigItemImg}
          data={element}
          avatar={avatar}
        />
      );
    }
  });

  const BlogBig = blogItemsArr.map((element, index) => {
    if (index === 4) {
      return <BlogBigItem data={element} bgImg={bigItemImg} avatar={avatar} />;
    }
  });

  const blogSmallArr = blogItemsArr.map((element, index) => {
    if (index >= 5 && index < 8) {
      debugger;
      return <BlogSmallItem postImg={smPostImg} key={index} data={element} />;
    }
  });

  return (
    <>
      <div className="blog_section">
        <Title>Read out Blog posts</Title>
        <div className="blog_section__content_block">
          {BlogBig}
          {blogMidArr}
          <div className="blog_section__content_block__sm">{blogSmallArr}</div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
