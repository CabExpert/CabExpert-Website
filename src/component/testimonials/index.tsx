import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./testimonials.module.scss";
import { useEffect, useRef, useState } from "react";
import RatingStar from "../rating-star/rating-star";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation"; // Import Swiper navigation styles
import "swiper/css/pagination"; // Import Swiper pagination styles
import SwiperCore from 'swiper/core'; // Import Swiper core and required modules
import { Navigation } from "swiper/modules";
import { Pagination } from "swiper/modules";
import { Autoplay } from "swiper/modules";

// Install Swiper modules
SwiperCore.use([Navigation, Pagination,Autoplay]);

const Testimonials = () => {
  const [places, setPlaces] = useState<any>([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch("/api/places?query=CabX");
        const data = await response.json();
        setPlaces(data?.result);
      } catch (error) {
        console.error("Error fetching places:", error);
      }
    };

    fetchPlaces();
  }, []);

  const reviews = places?.reviews;
  console.log(reviews, "rrrrrrrrrrrr");
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState<any>(undefined);

  useEffect(() => {
   
    if (typeof window !== 'undefined') {     
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };   
      setWindowWidth(window.innerWidth);     
      window.addEventListener('resize', handleResize);    
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  
  return (
    <>
      <div className={styles.testHeading}>
        <h2>Client Testimonials</h2>
      </div>

      <div className={styles.test}>
        <div className={styles.testbox}>
        <Swiper
          slidesPerView={windowWidth<500 ? 1 : windowWidth<1024 ? 2 : 3}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 2000 }}

            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            style={{paddingTop:"50px"}}
          >
          {reviews?.map((value: any, index: number) => {
            return (
              <>
              <SwiperSlide
                  key={index}

              >
                <div
                  className={styles.customer}
                  style={{ position: "relative" }}
                >
                  <Image
                    src={value?.profile_photo_url}
                    alt="/Ellipse28.png"
                    height={100}
                    width={100}
                  />
                  <h3>
                    {/* {value.name} */}
                    {value?.author_name}
                  </h3>
                  <h5>{value?.relative_time_description}</h5>
                  <p>{value?.text}</p>
                  <div>
                    <div className={styles.ratingStar}>
                      {value?.rating === 1 ? (
                        <>
                          <RatingStar />
                        </>
                      ) : value?.rating === 2 ? (
                        <>
                          <RatingStar />
                          <RatingStar />
                        </>
                      ) : value?.rating === 3 ? (
                        <>
                          <RatingStar />
                          <RatingStar />
                          <RatingStar />
                        </>
                      ) : value?.rating === 4 ? (
                        <>
                          <RatingStar />
                          <RatingStar />
                          <RatingStar />
                          <RatingStar />
                        </>
                      ) : value?.rating === 5 ? (
                        <>
                          <RatingStar />
                          <RatingStar />
                          <RatingStar />
                          <RatingStar />
                          <RatingStar />
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                </SwiperSlide>
              </>
            );
          })}
</Swiper>
        </div>
      </div>
          
            
          
    </>
  );
};
export default Testimonials;

const customer = [
  {
    Image: "/Ellipse28.png",
    name: "Hithrik Soni",
    place: "Punjab",
    content:
      "Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings...",
  },
  {
    Image: "/Ellipse28.png",
    name: "Hithrik Soni",
    place: "Punjab",
    content:
      "Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings...",
  },
  {
    Image: "/Ellipse28.png",
    name: "Hithrik Soni",
    place: "Punjab",
    content:
      "Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings...",
  },
];
