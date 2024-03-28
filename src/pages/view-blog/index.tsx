import Header from "@/component/navbar";
import React from "react";
import styles from "@/styles/blogs.module.scss";
import BannerImage from "../../../public/view-blog-cover.png";
import BannerCar from "../../../public/view-blog-car.png";
import BannerLogo from "../../../public/view-blog-logo.png";

import Image from "next/image";
import Overview from "@/component/overview";

const ViewBlog = () => {
  return (
    <div className={`${styles.view_blog_main_container}`}>
      <Header />

      <div className={`${styles.view_blog_container}`}>
        <h2>
          Car Rental software boosts retail business's revenue by 55%+ in 2024
        </h2>

        <div className={`${styles.view_blog_banner}`}>
          <Image
            src={BannerLogo}
            className={`${styles.view_blog_banner_logo_image}`}
            alt="location"
            width={1200}
            height={200}
          />
          <Image
            src={BannerImage}
            className={`${styles.view_blog_banner_image}`}
            alt="location"
            width={1200}
            height={200}
          />
          <Image
            src={BannerCar}
            className={`${styles.view_blog_banner_car}`}
            alt="location"
            width={1200}
            height={200}
          />
        </div>
        <div className={`${styles.blog_para}`}>
          <span>
            "As a child, I have travelled a lot in trains across India. I
            remember my excitement as a train would slowly approach the
            platform, waiting to take me to somewhere new and totally
            unexplored.
          </span>

          <span>
            I carried this dream with me when I moved to the UK and wanted to
            explore every nook and corner of this beautiful and diverse European
            continent, to experience the sights and sound of new cultures and
            their culinary delights. And this, unfortunately, led to many
            uncomfortable encounters with car rental companies. Over 85% of
            customers who regularly rent cars or vans have expressed
            dissatisfaction in their rental experience.
          </span>

          <span>
            Now compare this to their No. 1 reason for renting: 70% of people
            hire cars for ‘convenience’.I am an avid traveller and this was a
            chance to fix problems faced by my fellow travelers and myself when
            renting cars.With Cabx, I am able to carry out my vision of creating
            a consumer-centrical rental experience that unlocks the true value
            of ‘convenience’ that customers desire.{" "}
          </span>

          <span>
            Our goal is to create more transparency and drive best practices in
            the industry. At Cabx, we believe that transforming the industry
            from the inside out is key to solving customer problems."
          </span>
        </div>

        <div className={`${styles.cabSuggest}`}>
          <h2>Cabxsuggest</h2>
          <p>
            Want more traffic? Cabxsuggest shows you how to win the game of SEO.{" "}
            <br />
            Just type in a domain or a keyword to get started
          </p>

          <div className={`${styles.search_bar}`}>
            <input type="text" placeholder=" Billing and Invoicing" />
            <button>Search</button>
          </div>
          <span className={`${styles.para_below_search}`}><p>For example, a search for the phrase “Billing and Invoicing” generates the following:</p></span>
        </div>
        <div>
            <Overview/>
        </div>

        
      </div>
    </div>
  );
};

export default ViewBlog;
