import React from "react";
import Image from "next/image";
import CardImage from "../../../public/blogCardCover.png";
import styles from "@/styles/blogs.module.scss";
import { useRouter } from "next/navigation";

const BlogCard = () => {

    const router = useRouter()

    const viewBlog = () => {
        router.push("/view-blog")
    }
  return (
    <div onClick={() =>viewBlog()} className={`${styles.blog_card_container}`}>
      <div className="top">
        <Image src={CardImage} className={`${styles.blog_card_image}`} alt="location" width={200} height={200}/>
      </div>
      <div className={`${styles.card_bottom}`}>
        <div className={`${styles.blog_card_title}`}>
            How renting vehicle can save your money
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
