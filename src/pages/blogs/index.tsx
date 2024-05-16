import Header from "@/component/navbar";
import React, { useCallback, useEffect, useState } from "react";
import BlogCard from "../../component/blog-card";
import styles from "@/styles/blogs.module.scss";
import Footer from "@/component/footer";
import { getAllBlogs } from "../../../network-requests/apis";

const Blogs = () => {
  const [state, setState] = useState<any>([]);

  const handleGetAllBlogs = React.useCallback(async () => {
    try {
      const response = await getAllBlogs();
      console.log({ response })
      if (response) setState(response)
    } catch (error: any) {
      console.log({ error })
    }
  }, [])

  React.useEffect(() => {
    handleGetAllBlogs();
  }, []);

  

  console.log("state", { state });
  return (
    <div className={`${styles.blog_container}`}>
      <Header />

      <div className={`${styles.blogs_container}`}>
        <div className={`${styles.blog_cards_wrapper}`}>
          <div className={`${styles.cards_compo}`}>
            {state?.map((item: any, index: number) => {
              return (
                <>
                  <BlogCard item={item} key={index} />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;
