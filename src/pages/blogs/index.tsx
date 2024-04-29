import Header from "@/component/navbar";
import React, { useCallback, useEffect, useState } from "react";
import BlogCard from "../../component/blog-card";
import styles from "@/styles/blogs.module.scss";
import Footer from "@/component/footer";

const Blogs = () => {
  const [state, setState] = useState<any>([]);
  const getAllBlogs = useCallback(async () => {
    const res = await fetch(
      "https://admin.cabexpert.co/api/auth/superadmin/blogs"
    );
    const data = await res.json();

    setState(data);
  }, []);
  useEffect(() => {
    getAllBlogs();
  }, [getAllBlogs]);

  console.log("state", { state });
  return (
    <div className={`${styles.blog_container}`}>
      <Header />

      <div className={`${styles.blogs_container}`}>
        <div className={`${styles.blog_cards_wrapper}`}>
          <div className={`${styles.cards_compo}`}>
            {state?.map((item: any, index: any) => {
              return (
                <>
                  <BlogCard item={item} />
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
