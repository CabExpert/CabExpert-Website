import Header from "@/component/navbar";
import React from "react";
import BlogCard from "../../component/blog-card";
import styles from "@/styles/blogs.module.scss";

const Blogs = () => {
  return (
    <div className={`${styles.blog_container}`}>
      <Header />

      <div className={`${styles.blogs_container}`}>
        <div className={`${styles.blog_cards_wrapper}`}>
          <div className={`${styles.cards_compo}`}>
            <BlogCard  />
          </div>
          <div className={`${styles.cards_compo}`}>
            <BlogCard />
          </div>
          <div className={`${styles.cards_compo}`}>
            <BlogCard />
          </div>
          <div className={`${styles.cards_compo}`}>
            <BlogCard />
          </div>
          <div className={`${styles.cards_compo}`}>
            <BlogCard />
          </div>
          <div className={`${styles.cards_compo}`}>
            <BlogCard />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blogs;
