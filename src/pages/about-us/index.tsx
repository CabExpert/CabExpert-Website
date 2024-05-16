import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/about-us.module.scss";
import Navbar from "@/component/navbar";
import { Value } from "sass";
import { useState } from "react";
import Footer from "@/component/footer";
import Testimonials from "@/component/testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>About Us - Discover Our Vision and Mission | CabX</title>
        <meta
          name="description"
          content="Elevate your taxi service to new heights with our cutting-edge cab management system. Our platform offers  driver scheduling, customer bookings, and real-time tracking. Explore Now"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
        <link rel= "canonical" href= "/about-us" />
      </Head>
      <Navbar />

      <div className={`${styles.about} container `}>
        <div className={styles.cabx}>
          {/* <h4>Take Part In </h4> */}
          <div className={styles.logo}>
            <Image
              src="/about-cab-img.png"
              alt="logo"
              className={styles.cablogo}
              width={300}
              height={150}
            />
            {/* <Image
              src="/mytaxi.png"
              alt="logo"
              className={styles.xlogo}
              width={105}
              height={150}
            /> */}
          </div>
        </div>

        <div className={styles.content}>
          <h2>Our Story</h2>
          <h4>
            <p>
          CabX parent company, Epic Global Digital Solutions Pvt. Ltd., established CabX with a passion for leveraging technology to simplify our lives and make it more convenient for everyone. This is <b>CabX</b>  story, with a vision of addressing the challenges faced by frequent travelers seeking car rentals, as well as small and large enterprise vehicle rental businesses aiming to attract more customers.
          </p></h4>
          {/* <p>
            As a child, I have travelled a lot in trains across India. I
            remember my excitement as a train would slowly approach the
            platform, waiting to take me to somewhere new and totally
            unexplored. I carried this dream with me when I moved to the UK and
            wanted to explore every nook and corner of this beautiful and
            diverse European continent, to experience the sights and sound of
            new cultures and their culinary delights. And this, unfortunately,
            led to many uncomfortable encounters with car rental companies. Over
            85% of customers who regularly rent cars or vans have expressed
            dissatisfaction in their rental experience. Now compare this to
            their No. 1 reason for renting: 70% of people hire cars for
            ‘convenience’.I am an avid traveller and this was a chance to fix
            problems faced by my fellow travelers and myself when renting
            cars.With Cabx, I am able to carry out my vision of creating a
            consumer-centrical rental experience that unlocks the true value of
            ‘convenience’ that customers desire. Our goal is to create more
            transparency and drive best practices in the industry. At Cabx, we
            believe that transforming the industry from the inside out is key to
            solving customer problems.
          </p> */}
          {/* <h5>Anupam Singh</h5>
          <span>FOUNDER AND CEO</span> */}
        </div>

        <div className={styles.value}>
          <h2>Our Values</h2>
          <div className={styles.boxx}>
            {material.map((value, index) => {
              console.log("sahilhero", { value });
              return (
                <>
                  <div className={styles.values} key={index}>
                    <Image
                      src={value.image}
                      alt="image"
                      height={89}
                      width={96}
                    />
                    <h3>{value?.heading}</h3>
                    <p>{value.paragraph}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/* <div className={styles.manphone}>
          <h2>Customizable workflow to suit your internal policies.</h2>
          <h3>Employee profile & category management</h3>
          <ul>
            <li>1. Tailor the workflow to align with your internal policies.</li>
            <li>
              2. Customize the workflow according to your specific organizational
              rules.
            </li>
            <li>
              3. Make adjustments to the workflow to accommodate and reflect your
              internal policies.
            </li>
            <li>
              4. Personalize the workflow to adhere to the guidelines and
              procedures within your organization
            </li>
          </ul>
        </div> */}
        <Testimonials />
      </div>

      {<Footer />}
    </>
  );
}

const material = [
  {
    image: "/Group490.png",
    heading: "Innovation",
    paragraph:
      "We strive to push the boundaries of what's possible in the vehicle rental industry by embracing innovation. From cutting-edge technology solutions to creative business strategies, we're constantly seeking new ways to improve and enhance the customer experience.",
  },
  {
    image: "/Group491.png",
    heading: "Reliability",

    paragraph:
      "Trust is at the core of everything we do. We believe in delivering reliable and dependable service to our customers and partners alike. You can count on us to be there when you need us, every step of the way.",
  },
  {
    image: "/Group492.png",
    heading: "Community",
    paragraph:
      "  At CabX, we believe in the power of community. We're more than just a platform for vehicle rentals – we're a supportive network of travelers, rental businesses, and partners working together towards a common goal. Together, we're building a stronger, more connected community where everyone can thrive.",
  },
  // {
  //   image: "/Group493.png",
  //   heading: "Commercial",
  //   paragraph:
  //     "      We build success by making sound business decisions and by building mutually profitable relationships with our customers and our partners.  ",
  // },
  // {
  //   image: "/Group494.png",
  //   heading: "Transparent",
  //   paragraph:
  //     " Customers, partners and colleagues know what to expect from us and what we ask from them in return.",
  // },
  // {
  //   image: "/Group495.png",
  //   heading: "Inclusive",
  //   paragraph:
  //     "We care about the people we work for, and those we work with. We also care deeply about the environment. ",
  // },
];
