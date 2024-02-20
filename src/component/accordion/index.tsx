import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./accordion.module.scss";
import React from "react";
import {useState} from "react"


const accordion = () => {
    const [toggleFaq,setToggleFaq] = useState("");
    const toggleFunction = (value:string) =>{
            // setToggleFaq(value);/
            toggleFaq==="" ? setToggleFaq(value) : setToggleFaq("")
    }
  return (
    <>
      <div className={`${styles.accordion} container `}>
        <div className={styles.accord}>
          {accord.map((value, index) => {
            return (
              <div className={styles.all} key={index}>
                <div className={styles.cross} onClick={()=>toggleFunction(value.heading)}>
                  <h3>{value.heading} </h3>
                  <Image src="/plus.png" alt="cross" width={24} height={24} className={`${toggleFaq===value.heading ? styles.rotate : ""}`} />
                  
                </div>
                {toggleFaq === value.heading &&
                <p>{value.paragraph}</p>
                
                }
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.test}></div>
    </>
  );
};
export default accordion;

const accord = [
  {
    heading: "Ornare laoreet mi tempus neque ",
    paragraph:
      "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
   
  },
  {
    heading: "Rhoncus nullam aliquam nam proin",
    paragraph:
      "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
   
  },
  {
    heading: "Duis enim bibendum dui ut fringilla suspendisse vel sed ultricies",
    paragraph:
      "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
   
  },
  {
    heading: "Lectus fringilla volutpat egestas nisi, viverra mauris",
    paragraph:
      "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
   
  },
  {
    heading: "Vitae sollicitudin vitae libero tincidunt",
    paragraph:
      "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
   
  },
  {
    heading: "Tellus velit vitae arcu lacinia pharetra, ut lectus pulvinar facilisis",
    paragraph:
      "Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.",
   
  },
];
