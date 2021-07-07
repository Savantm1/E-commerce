import React from "react";
import BlogItemLarge from "../../components/BlogSection/BlogItemLarge/BlogItemLarge";
import "./BlogItemPage.scss";
import vk from "./../../assets/icons/free-icon-vk-social-network-logo-25684.svg";
import twitter from "./../../assets/icons/free-icon-twitter-733635.svg";
import facebook from "./../../assets/icons/free-icon-facebook-1384005.svg";
import arrow_back from "./../../assets/icons/ic-directions-left.svg";
import CommentSection from "../../components/CommentSection/CommentSection";
import BlogMidItem from "../../components/BlogSection/BlogMidItem/BlogMidItem";
import Title from "../../components/Filters/Title/Title";
import postImg from "../../assets/img/Rectangle 26-2 s.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";



const BlogItemPage = (props) => {
debugger
  const blogItemsArr = useSelector((state) => state.blog.blog);
  ;

  const blogMidArr = blogItemsArr.map((element, index) => {
    if (index < 4 ) {
      ;
      return (
        <BlogMidItem
          key={index}
          data={element}
          postImg={postImg}
        />
      );
    }
  });

  
  return (
    <>
      <BlogItemLarge data={props.itemData}/>
      <div className="blog_item_page">
        <aside className="back_block">
          <Link to="/blog" className="back" alt="back">
            <img src={arrow_back} className="arrow_back" alt="back" />
            Back to Blog
          </Link>
        </aside>
        <div className="blog_item_page__container">
          <p className="blog_item_page__text">
            {props.itemData.description}
          </p>
          <h4 className="blog_item_page__subtitle">
            Morning Ritual // 9:00 AM
          </h4>
          <p className="blog_item_page__text">
            {props.itemData.description}
          </p>
          <h4 className="blog_item_page__subtitle">Mid-day Boost // 2:00 PM</h4>
          <p className="blog_item_page__text">
            {props.itemData.description}
          </p>
          <p className="blog_item_page__text">
            {props.itemData.description}
          </p>
          <h4 className="blog_item_page__subtitle">Evening Calm // 8:00 PM</h4>
          <p className="blog_item_page__text">
            {props.itemData.description}
          </p>
          <div className="share_block">
            Share
            <a href="/#" className="share" alt="vk">
              <img src={vk} alt="vk" />
              Vkontakte
            </a>
            <a href="/#" className="share" alt="twitter">
              <img src={twitter} alt="vk" />
              Twitter
            </a>
            <a href="/#" className="share" alt="facebook">
              <img src={facebook} alt="vk" />
              Facebook
            </a>
          </div>
          <CommentSection data = {props.itemData.comments} blogItemId = {props.itemData.id}/>
        </div>
      </div>
      <section className="releated_section">
          <Title width="100%"> Releated topics</Title>
          {blogMidArr}
        </section>
    </>
  );
};

export default BlogItemPage;
