import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./accordion.module.scss";
import React from "react";
const Accordion = () => {
  const [toggleFaq, setToggleFaq] = React.useState("");
  const toggleFunction = (value: string) => {
    // setToggleFaq(value);/
    toggleFaq === "" ? setToggleFaq(value) : setToggleFaq("");
  };
  return (
    <>
      <div></div>
      <div
        className={`${styles.accordion} container `}
        style={{ position: "relative" }}
      >
        <div className={styles.accord}>
          {accord.map((value, index) => {
            return (
              <div className={styles.all} key={index}>
                <div
                  className={styles.cross}
                  onClick={() => toggleFunction(value.heading)}
                >
                  <h3>{value.heading} </h3>
                  <Image
                    src="/plus.png"
                    alt="cross"
                    width={24}
                    height={24}
                    className={`${
                      toggleFaq === value.heading ? styles.rotate : ""
                    }`}
                    style={{ backgroundColor: "#fff", borderRadius: "50%", marginTop: "4px" }}
                  />
                </div>
                {toggleFaq === value.heading && <p>{value.paragraph}</p>}
              </div>
            );
          })}
        </div>
        <Image
          src={"/Cloud-in-sky-vector-PNG-ezgif.com-video-to-gif-converter.gif"}
          alt="car"
          width={1440}
          height={1024}
          style={{
            width: "46%",
            height: "80%",
            position: "absolute",
            top: "0px",
            zIndex: "-9",
            backgroundColor: "transparent",
          }}
          className={styles.cloud}
        />

        <Image
          src={"/car.gif"}
          alt="car"
          width={1440}
          height={1024}
          style={{
            width: "46%",
            height: "80%",
            position: "absolute",
            bottom: "-140px",
            zIndex: "-9",
          }}
          className={styles.moving_car}
        />
      </div>

      <div className={styles.test}></div>
    </>
  );
};
export default Accordion;

const accord = [
  {
    heading: "Can I use multiple vehicles with CabX?",
    paragraph:
      "Yes, you can register multiple vehicles under your account.",
  },
  {
    heading: "What are the benefits of driving with CabX?",
    paragraph:
      "Monitor live location, and digital duty slip can help to reduce the time for the billing and account.",
  },
  {
    heading:
      "How does CabX benefit cab and taxi owners?",
    paragraph:
      "CabX streamlines operations by digitizing receipts, simplifying billing processes, and enhancing customer engagement.",
  },
  {
    heading: "Can CabX assist with customer communication and engagement?",
    paragraph:
      "Yes, CabX facilitates direct communication between cab owners and customers through in-app messaging and notification features.",
  },
  {
    heading: "Is CabX suitable for small-scale cab businesses?",
    paragraph:
      "Absolutely, CabX caters to businesses of all sizes, offering scalable solutions tailored to meet the specific needs of small cab operations.",
  },
  {
    heading:
      "How secure is the data stored on CabX?",
    paragraph:
      "CabX prioritizes data security and employs robust encryption measures to safeguard sensitive information related to receipts, billing, and customer data.",
  },
  {
    heading:
      "How can cab owners get started with CabX?",
    paragraph:
      "Getting started with CabX is simple! Interested cab owners can sign up for an account, customize settings to their preferences, and start optimizing their operations right away.",
  },
];
