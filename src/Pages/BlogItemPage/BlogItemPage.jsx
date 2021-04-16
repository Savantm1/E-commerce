import React from "react";
import BlogItemLarge from "../../components/BlogSection/BlogItemLarge/BlogItemLarge";
import "./BlogItemPage.scss";
import vk from "./../../assets/icons/free-icon-vk-social-network-logo-25684.svg";
import twitter from "./../../assets/icons/free-icon-twitter-733635.svg";
import facebook from "./../../assets/icons/free-icon-facebook-1384005.svg";
import arrow_back from "./../../assets/icons/ic-directions-left.svg";
import CommentSection from "../../components/CommentSection/CommentSection";


const BlogItemPage = (props) => {
  return (
    <>
      <BlogItemLarge />
      <div className="blog_item_page">
        <aside className="back_block">
          <a href="#" className="back" alt="back">
            <img src={arrow_back} className="arrow_back" alt="back" />
            Back to Blog
          </a>
        </aside>
        <div className="blog_item_page__container">
          <p className="blog_item_page__text">
            There’s nothing like a warm cup of tea to start your morning—or
            maybe you’re all about an iced hibiscus on a sunny Saturday
            afternoon. Whether you’re just craving chamomile or are looking to
            ditch your coffee dependency, here’s our go-to guide on
            incorporating a few new teas into your daily routine!{" "}
          </p>
          <h4 className="blog_item_page__subtitle">
            Morning Ritual // 9:00 AM
          </h4>
          <p className="blog_item_page__text">
            Want that extra morning energy without the caffeine jitters? Switch
            out your morning mug of coffee for a warm, energizing cup of earl
            grey. Serve as is or stir in some milk and honey for extra coziness.
            If you want to spice things up, try chai tea instead! The
            combination of cinnamon, cardamom, and ginger smells amazing and
            gives you that nice little flavor kick to start your day off right.
          </p>
          <h4 className="blog_item_page__subtitle">Mid-day Boost // 2:00 PM</h4>
          <p className="blog_item_page__text">
            If you’re feeling a little sluggish post-lunch, beat the afternoon
            slump with some lemon ginger green tea. Green tea can be a great
            alternative to coffee in the afternoon when you want that little
            boost of energy. An added benefit: lemon and ginger work together to
            aid digestion which is especially helpful after lunch.
          </p>
          <p className="blog_item_page__text">
            If you’re not into hot drinks, opt-in for a fruity iced green tea
            instead. Steep some honeydew or peach green tea in hot water for a
            few minutes and then pour over ice until it’s nice and cool. Enjoy
            with a slice of lemon, and you’ll feel refreshed and ready to tackle
            any task.{" "}
          </p>
          <h4 className="blog_item_page__subtitle">Evening Calm // 8:00 PM</h4>
          <p className="blog_item_page__text">
            Slip on some fuzzy socks, light your favorite candles, and fire up
            the kettle—it’s time to wind down after a long day. Grab yourself a
            soothing cup of lavender chamomile tea and indulge in some
            well-deserved self-love.{" "}
          </p>
          <div className="share_block">
            Share
            <a href="#" className="share" alt="vk">
              <img src={vk} alt="vk" />
              Vkontakte
            </a>
            <a href="#" className="share" alt="twitter">
              <img src={twitter} alt="vk" />
              Twitter
            </a>
            <a href="#" className="share" alt="facebook">
              <img src={facebook} alt="vk" />
              Facebook
            </a>
          </div>
          <CommentSection/>
        </div>
      </div>
    </>
  );
};

export default BlogItemPage;
