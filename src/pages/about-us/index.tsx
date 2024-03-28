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
        <meta name="description" content="Elevate your taxi service to new heights with our cutting-edge cab management system. Our platform offers  driver scheduling, customer bookings, and real-time tracking. Explore Now" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
      </Head>
      <Navbar />

      <div className={`${styles.about} container `}>
        <div className={styles.cabx}>
          <h4>Take Part In </h4>
          <div className={styles.logo}>
            <Image src="/Cab.png" alt="logo" width={300} height={150} />
            <Image src="/mytaxi.png" alt="logo" width={105} height={150} />
          </div>
        </div>

        <div className={styles.content}>
          <h2>Our Story</h2>
          <h4>
            Cabx parent company, was founded out of a passion
            how we can make our life easeay by using the , and the urge to make it convenient for all. This is
            the <br></br>story of our founder Biswajit, an avid traveller with a
            vision to solve problems faced by fellow travellers looking to rent
            cars, as well as <br></br>small vehicle rental companies seeking
            more customers.
          </h4>
          <p>
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
          </p>
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
        <div className={styles.manphone}>
          <h2>Customizable workflow to suit your internal policies.</h2>
          <h3>Employee profile & category management</h3>
          <ul>
            <li>1.Tailor the workflow to align with your internal policies.</li>
            <li>
              2.Customize the workflow according to your specific organizational
              rules.
            </li>
            <li>
              3.Make adjustments to the workflow to accommodate and reflect your
              internal policies.
            </li>
            <li>
              4.Personalize the workflow to adhere to the guidelines and
              procedures within your organization
            </li>
          </ul>
        </div>
        <Testimonials />
      </div>

      {<Footer />}
    </>
  );
}

const material = [
  {
    image: "/Group 490.png",
    heading: "Challenging",
    paragraph:
      "We know we can always do better, and we relentlessly challenge ourselves to do so. We’re innovative in everything we do.",
  },
  {
    image: "/Group 491.png",
    heading: "Accountable",

    paragraph:
      "We hold ourselves accountable. We say what we’ll do, and we do what we say. We learn from our successes and failures.",
  },
  {
    image: "/Group 492.png",
    heading: "Caring",
    paragraph:
      " We care about the people we work for, and those we work with. We also care deeply about the environment.",
  },
  {
    image: "/Group 493.png",
    heading: "Commercial",
    paragraph:
      "      We build success by making sound business decisions and by building mutually profitable relationships with our customers and our partners.  ",
  },
  {
    image: "/Group 494.png",
    heading: "Transparent",
    paragraph:
      " Customers, partners and colleagues know what to expect from us and what we ask from them in return.",
  },
  {
    image: "/Group 495.png",
    heading: "Inclusive",
    paragraph:
      "We care about the people we work for, and those we work with. We also care deeply about the environment. ",
  },
];
