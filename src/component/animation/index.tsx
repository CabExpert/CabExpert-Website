import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./animation.module.scss";
import React, { useEffect, useState, useRef } from "react";
import MyTaxi from "../../../public/mytaxi.png";
import OverImage from "../../../public/overImage.png";
import OverImage1 from "../../../public/overImage1.png";
import OverImage2 from "../../../public/overImage2.png";

const Animation = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [image, setImage] = useState<any>(0);
  const images = [OverImage, OverImage1, OverImage2];
  const [value, setValue] = useState("");
  const animatedTextRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 400);

    return () => clearInterval(intervalId);
  }, [images.length]);

  useEffect(() => {
    if (animatedTextRef.current) {
      const beforeStyle = window.getComputedStyle(
        animatedTextRef.current,
        "::after"
      );
      const contentValue = beforeStyle.content;
      setValue(contentValue);
      console.log(value, "value");
    } else {
      console.error("Element not found");
    }
  });

  useEffect(() => {
    console.log("value", value);
    if (value === `"Digital Duty Slips"`) {
      setImage(0);
      // console.log("Digital");
    } else if (value === `"Billing and Invoicing"`) {
      setImage(1);
      // console.log("Billing");
    } else if (value === `"Real-Time Tracking"`) {
      setImage(2);
      // console.log("Real-time");
    } else {
      setImage(0);
    }
  }, [value]);

  return (
    <>
      <div className={`${styles.content_two} animation-container container `}>
        <main className="flex min-h-screen bg-black flex-col items-center justify-between p-24">
          <div className="animation-container animated-gap">
            {/* ----1 */}
            <div
              ref={animatedTextRef}
              className="animated-text text-center text1 flex relative "
            ></div>

            <span className="with">with CabX</span>
            <div className="bg-image">
              {" "}
              <div className="image">
                <Image
                  src={images[image]}
                  width={500}
                  height={500}
                  className="object-contain absolute right-44 w-[500px] top-0 over-image"
                  alt=""
                />
              </div>
              <Image
                src={MyTaxi}
                width={300}
                height={350}
                className="w-[500px] object-contain h-[500px] absolute right-14 top-0"
                alt=""
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Animation;
