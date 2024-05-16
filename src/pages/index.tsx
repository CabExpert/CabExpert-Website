/* eslint-disable @next/next/next-script-for-ga */
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/home.module.scss";
import Navbar from "@/component/navbar";
import { Value } from "sass";
import { useEffect, useState } from "react";
import Footer from "@/component/footer";
import Testimonials from "@/component/testimonials";
import Animation from "@/component/animation";
import useToken from "../hooks/useToken";
import { useDispatch } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const [popup, setpopup] = useState(false);

  // Example how to get token value from redux state
  const token = useToken();
  console.log("get token value", token);

  return (
    <>
      <Head>
        <title>
        Manage Digital Duty Slip and Driver Real-time Tracking with CabX
        </title>
        <meta
          name="description"
          content="Manage your cab and taxi business with CabX, with real-time driver location tracking, digital duty slips, along with instant invoices and billing. Visit now for a Free Demo."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fabicon.png" />
        <link rel="canonical" href="/" />

        {/*(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WGTKRVJF'); */}

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WGTKRVJF');
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
           
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CabX: Streamline Driver Management and Billing Processes Digitally",
  "image":"https://cabexpert.co/_next/image?url=%2FGroup%20214.png&w=384&q=75",
"description": "CabX Driver Management and Billing Processes streamline operations for companies and small cab/Taxi Operators, enabling them to efficiently manage and automate the process of booking, duty slips, and invoices. Explore Now!",
  "@id": "https://cabexpert.co/",
 "url": "https://cabexpert.co/", 
"telephone": "0129-417-6500",
  "priceRange": "Ask",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "402, H-140, Sector 63",
    "addressLocality": "Noida (UP)",
    "postalCode": "201301",
    "addressCountry": "+91",
    "addressRegion": "+91"
  },
"openingHoursSpecification": 
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "08:00"
  },
  "review": {
    "@type": "Review",
    "reviewRating": {
      "@type" : "Rating",
      "ratingValue" : "5",
      "bestRating" : "5",
      "worstRating" : "1"
    },
    "author": {
      "@type": "Person",
      "name": "Hithrik Soni"
    },
    "reviewBody": "CabX has revolutionized my small taxi business! Previously, juggling duty slips, billing, and monitoring drivers was a real headache. But CabX has simplified everything. I can now concentrate on expanding my business without the burden of administrative hassles. I highly recommend it!."
  },
  "sameAs": [
    "https://www.facebook.com/officialcabX/",
    "https://www.instagram.com/officialcabx",
    "https://www.youtube.com/@officialCabx"
  ] 
}

            `,
          }}
        />
      </Head>
      <Navbar />
      <Animation />

      {/* <!-- Google Tag Manager (noscript) --> */}
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WGTKRVJF"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>
      {/* <!-- End Google Tag Manager (noscript) --> */}

      <div className={`${styles.start} container `}>
        <span>One New-Age Car Rental Software to Replace Them All</span>
        <div className={styles.button}>
          <button className={styles.button_one}>Start now</button>
        </div>
      </div>
      {/* <Image src="/x.png" alt="X" height={475} width={250}></Image> */}
      <div className={`${styles.content_three} container `}>
        <h4>Elevate Your Taxi Business </h4>
        <span>Key Advantages</span>
      </div>
      <div className={styles.three_box} style={{ position: "relative" }}>
        <div className={`${styles.main_box} container `}>
          {box.map((value, index) => {
            return (
              <>
                <div className={styles.box} key={index}>
                  <Image
                    src={value.image}
                    alt="location"
                    height={176}
                    width={126}
                  />
                  <h4>{value.heading}</h4>
                  <p>{value.content}</p>
                </div>
              </>
            );
          })}
        </div>

        <div style={{ position: "absolute", top: "0" }}>
          {/* <Image src="/x.png" alt="image" height={450} width={250} /> */}
        </div>
      </div>
      <div className={`${styles.help} container `}>
        <div className={styles.indiamap}>
          <h3>
            Automated Calculations from<br></br> Garage to Garage
          </h3>
          <Image src="/Group489.png" alt="Indiamap" width={950} height={900} />
        </div>

        <Testimonials />
      </div>
      <div className={styles.outer}>
        <div className={`${styles.help} container `}>
          <div className={styles.helps}>
            <h2>Let us help.</h2>
            <p>
              Get started with our free-of-charge, personalised support. Create
              your custom ads plan with a Google Ads Expert.
            </p>
            <button className={styles.button_help}>0120-417-6500</button>
          </div>
        </div>
      </div>

      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WGTKRVJF"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      {/* <div className={styles.heading_one}>
        <h2>
          How could <span>Cabx</span> benefit you?
        </h2>
      </div>
      <div className={styles.box}>
        {Cabxbenefit.map((value, index) => {
          return (
            <>
              <div className={styles.content_box} key={index}>
                <Image
                  src={value.Imageurl}
                  alt="Groupimage"
                  height={60}
                  width={60}
                />
                <h4>{value.heading}</h4>
                <p>{value.content}</p>
              </div>
            </>
          );
        })}
      </div>
      <div className={styles.heading_one}>
        <h2>
          Digital Duty slipes along with the <span>billing and receipts</span>
        </h2>
        <div className={styles.banner_three}>
          <div className={styles.style}>
            <Image
              src="/biling1.png"
              alt="billing image"
              width={551}
              height={401}
            />
          </div>
          <div className={styles.billing_right}>
            <p>
              Booking and fleet operations made easy to manage for all rental
              types and vehicles Optimise your business using a state of the art
              workflow process that helps you reduce failed duties & provide a
              superior service experience to your customers.
            </p>
            <ul>
              <li>
                <Image src="/Group269.png" alt="icon" width={9} height={10} />
                <span>Automated Billing & Compliance Reminders</span>
              </li>
              <li>
                <Image src="/Group269.png" alt="icon" width={9} height={10} />
                <span>Revenue Management</span>
              </li>
              <li>
                <Image src="/Group269.png" alt="icon" width={9} height={10} />
                <span>Digital Booking Management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.heading_one}>
        <h2>
          Real-time <span>Location Tracking</span>
        </h2>
      </div>
      <div className={styles.live_location}>
        <div>
          <p>
            Transform your cab and taxi business with CabX! Now, you can easily
            keep tabs on your drivers and passengers in real-time. No more
            guesswork – just efficient and convenient service for both small and
            large cab companies.
          </p>
          <ul>
            <li>
              <Image src="/Group269.png" alt="icon" width={9} height={10} />
              <span>Follow the journey progress.</span>
            </li>
            <li>
              <Image src="/Group269.png" alt="icon" width={9} height={10} />
              <span>Track the driver location in real-time.</span>
            </li>
            <li>
              <Image src="/Group269.png" alt="icon" width={9} height={10} />
              <span>
                Assists in calculating the distance traveled and the time taken.
              </span>
            </li>
          </ul>
          <p className={styles.Enhance}>
            Enhance the customer experience and stay ahead with cutting-edge
            technology!
          </p>
          <div className={styles.buttonwraper}>
            <button className={styles.button_one}>Get started</button>
            <div className={styles.link_one}>
              <a href="Already have an account? Sign in">
                Already have an account? Sign in
              </a>
            </div>
          </div>
        </div>
        <div className={styles.livelocation_image}>
          <Image
            src="/Group359.png"
            alt="billing image"
            width={450}
            height={450}
          />
        </div>
      </div>
      <div className={styles.heading_one}>
        <h2>
          Manage Customer and There <span>Contracts</span>
        </h2>
        <div className={styles.banner_four}>
          <Image
            src="/Group363.png"
            alt="iamge"
            height={510.66}
            width={1249}
          />
        </div>
        <div className={styles.box_four}>
          {contract.map((item, index) => {
            return (
              <>
                <div className={styles.content_boxtwo} key={index}>
                  <ul>
                    <h4>{item.heading}</h4>
                    <li>{item.listItem1}</li>
                    <li>{item.listItem2}</li>
                  </ul>
                </div>
              </>
            );
          })}
        </div>
        <div className={styles.heading_one}>
          <h2>
            Manage <span>fleets/vehicles </span>and there groups
          </h2>
        </div>
        <div className={styles.box_five}>
          <div className={styles.banner_five}>
            <Image
              src="/Group401.png"
              alt="car image"
              width={604}
              height={348}
            />
          </div>

          <div className={styles.fleets_vehicles}>
            <p>
              Fleet management made easier, efficient and cost-effective. Stay
              on top of what’s most important for the vehicles in your fleet
            </p>

            <div className={styles.fleets_vehicles}>
              <ul>
                {list.map((item, index) => {
                  return (
                    <>
                      <li>
                        {" "}
                        <Image
                          src={item.image}
                          alt="Ximage"
                          height={10}
                          width={10}
                          key={index}
                        />
                        {item.content}
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      <Footer />
    </>
  );
}

// const Cabxbenefit = [
//   {
//     Imageurl: "/Group282.png",
//     heading: "CREATE USERS & MANAGE PERMISSIONS",
//     content:
//       "Create as many login IDs as you need to. Give each employee their own login details and control what they have access to.",
//   },
//   {
//     Imageurl: "/Group276.png",
//     heading: "ACTIVITY LOG",
//     content:
//       "View a real-time record of any action performed by your employees on the platform.",
//   },
//   {
//     Imageurl: "/Group277.png",
//     heading: "FUEL & VEHICLE MANAGEMENT",
//     content:
//       "Track real-time fuel mileage & expenses for each of your vehicles.",
//   },
//   {
//     Imageurl: "/Group278.png",
//     heading: "REAL-TIME SUPPORT",
//     content:
//       "We’re here when you need us! Talk to our customer service representative for anything you need.",
//   },
// ];

// const contract = [
//   {
//     heading: "Customer Database",
//     listItem1:
//       "Maintain a centralized database with detailed information about each customer.",
//     listItem2:
//       "Include contact details, purchase history, communication history, and any specific preferences.",
//   },
//   {
//     heading: "Segmentation",
//     listItem1:
//       "Categorize customers based on factors such as buying behavior, demographics, or industry.",
//     listItem2:
//       "Include contact details, purchase history, communication history, and any specific preferences.",
//   },
//   {
//     heading: "Communication",
//     listItem1:
//       "Regularly communicate with customers through various channels (email, phone, social media).",
//     listItem2: "Personalize communication to strengthen relationships.",
//   },
//   {
//     heading: "Automation",
//     content:
//       "Regularly communicate with customers through various channels (email, phone, social media).Personalize communication to strengthen relationships.",
//     listItem1:
//       "Maintain a centralized database with detailed information about each customer.",
//     listItem2:
//       "Include contact details, purchase history, communication history, and any specific preferences.",
//   },
// ];
// const list = [
//   { image: "/Group269.png ", content: "Follow the journey progress." },
//   { image: "/Group269.png ", content: "Fleet Management App." },

//   { image: "/Group269.png ", content: "Maintenance Management." },
//   { image: "/Group269.png ", content: "Fleet Movement and Transfer." },
//   { image: "/Group269.png ", content: "Real Time Vehicle Scheduler." },
//   { image: "/Group269.png ", content: "Custom Vehicle Checklist." },
//   { image: "/Group269.png ", content: "Automated Fleet On-boarding." },
//   {
//     image: "/Group269.png ",
//     content: "Remote Immobilisation & Mobilisation.",
//   },
//   { image: "/Group269.png ", content: "Compliance Check." },
//   {
//     image: "/Group269.png ",
//     content: "Vehicle body type / Frog diagram: vehicle diagrams.",
//   },
// ];

const box = [
  {
    image: "/Group404(1).png",
    heading: "Reduced Manpower",
    content:
      "Save on labor costs with our SAAS platform for cab and taxi businesses, streamlining operations and reducing the need for extensive manpower.",
  },
  {
    image: "/Group405.png",
    heading: "Paperwork Efficiency",
    content:
      "Say goodbye to cumbersome paperwork. Our SAAS solution for small taxi businesses minimizes paperwork, promoting a more eco-friendly and organized operational approach.",
  },
  {
    image: "/Group402.png",
    heading: "Minimized Human Error",
    content:
      "Enhance accuracy and efficiency as our SAAS platform mitigates human errors, ensuring seamless and reliable taxi business operations.",
  },
];
