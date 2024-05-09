import React from "react";
import Image from "next/image";
import CardImage from "../../../public/blogCardCover.png";
import styles from "@/styles/blogs.module.scss";
import { useRouter } from "next/navigation";
interface BlogsCardProps {
  item?: any;
}

const BlogCard = ({ item }: BlogsCardProps) => {
  console.log("BLOGS CARD DATA", { item })
  const router = useRouter()

  const viewBlog = () => {
    router.push(`/blogs/${item?._id}`)
  }
  return (
    <div onClick={() => viewBlog()} className={`${styles.blog_card_container}`}>
      <div className="top">
        <Image src={CardImage} className={`${styles.blog_card_image}`} alt="location" width={200} height={200} />
      </div>
      <div className={`${styles.card_bottom}`}>
        <div className={`${styles.blog_card_title}`}>
          {item?.ogTitle}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
