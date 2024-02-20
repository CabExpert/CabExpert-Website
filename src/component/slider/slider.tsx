import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import overImagee from "../../../public/overImagee.png";
import mytaxi from "../../../public/mytaxi.png";
import styles from "./slider.module.scss";
import React from "react";

const Slider = () => {
  return (
    <>
      <div>
        <div className="animation-container">
          {/* ----1 */}
          <div className="animated-text text-center text1 flex">
            {" "}
            <div className="main-heading">
              {" "}
              <span className="text-[#1E8E3E] main-text1">
                {" "}
                Digital Duty Slips
              </span>
              <br /> with CabX
            </div>
            <div className="bg-image">
              {" "}
              <div className=" relative">
                <Image
                  src={overImagee}
                  width={130}
                  height={130}
                  className=" object-contain absolute right-44 top-0 over-image"
                  alt=""
                />
              </div>{" "}
              <Image
                src={mytaxi}
                width={300}
                height={300}
                className="w-[500px] object-contain h-[500px] absolute right-44 top-0"
                alt=""
              />
            </div>
          </div>
          {/* ----2 */}
          <div className="animated-text text-center text2 flex relative">
            {" "}
            <div className="main-heading">
              {" "}
              <span className="text-[#1E8E3E] main-text2">
                {" "}
                Billing and Invoicings
              </span>
              <br /> with CabX
            </div>
            <div className="bg-image">
              {" "}
              <div className=" relative">
                <Image
                  src={overImagee}
                  width={130}
                  height={130}
                  className=" object-contain absolute right-44 top-0 over-image"
                  alt=""
                />
              </div>{" "}
              <Image
                src={mytaxi}
                width={300}
                height={300}
                className="w-[500px] object-contain h-[500px] absolute right-44 top-0"
                alt=""
              />
            </div>
          </div>
          {/* ----3 */}
          <div className="animated-text text-center text3 flex relative">
            {" "}
            <div className="main-heading">
              {" "}
              <span className="text-[#1E8E3E] main-text3">
                {" "}
                Real-Time Tracking
              </span>
              <br /> with CabX
            </div>
            <div className="bg-image">
              {" "}
              <div className=" relative">
                <Image
                  src={overImagee}
                  width={130}
                  height={130}
                  className=" object-contain absolute right-44 top-0 over-image"
                  alt=""
                />
              </div>{" "}
              <Image
                src={mytaxi}
                width={300}
                height={300}
                className="w-[500px] object-contain h-[500px] absolute right-44 top-0"
                alt=""
              />
            </div>
          </div>
          {/* ----4 */}
          <div className="animated-text text-center text4 flex relative">
            {" "}
            <div className="main-heading">
              {" "}
              <span className="text-[#1E8E3E] main-text4">
                {" "}
                Real-Time Tracking
              </span>
              <br /> with CabX
            </div>
            <div className="bg-image">
              {" "}
              <div className=" relative">
                <Image
                  src={overImagee}
                  width={130}
                  height={130}
                  className=" object-contain absolute right-44 top-0 over-image"
                  alt=""
                />
              </div>{" "}
              <Image
                src={mytaxi}
                width={300}
                height={300}
                className="w-[500px] object-contain h-[500px] absolute right-44 top-0"
                alt=""
              />
            </div>
          </div>
          {/* ----5 */}
          <div className="animated-text text-center text5 flex relative">
            {" "}
            <div className="main-heading">
              {" "}
              <span className="text-[#1E8E3E] main-text5">
                {" "}
                Real-Time Tracking
              </span>
              <br /> with CabX
            </div>
            <div className="bg-image">
              {" "}
              <div className=" relative">
                <Image
                  src={overImagee}
                  width={130}
                  height={130}
                  className=" object-contain absolute right-44 top-0 over-image"
                  alt=""
                />
              </div>{" "}
              <Image
                src={mytaxi}
                width={300}
                height={300}
                className="w-[500px] object-contain h-[500px] absolute right-44 top-0"
                alt=""
              />
            </div>
          </div>
          {/* -------6 */}
          <div className="animated-text text-center text6 flex relative">
            {" "}
            <div className="main-heading">
              {" "}
              <span className="text-[#1E8E3E] main-text6">
                {" "}
                Real-Time Tracking
              </span>
              <br /> with CabX
            </div>
            <div className="bg-image">
              {" "}
              <div className=" relative">
                <Image
                  src={overImagee}
                  width={130}
                  height={130}
                  className=" object-contain absolute right-44 top-0 over-image"
                  alt=""
                />
              </div>{" "}
              <Image
                src={mytaxi}
                width={300}
                height={300}
                className="w-[500px] object-contain h-[500px] absolute right-44 top-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Slider;
