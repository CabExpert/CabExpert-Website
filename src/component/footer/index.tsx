import React from "react";
import Style from "../footer/footer.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();

  return (
    <div className={Style.xaxa}>
      <div className={`${Style.footer} container`}>
        <div className={Style.foottop}>
          <Image src="/Group214.png" alt="logo" height={72} width={150} />
          <span>
          Your go-to solution for efficient cab and taxi management. Streamline operations and enhance customer experience effortlessly.
          </span>
        </div>
        <div className={Style.lowfooter}>
          <div className={Style.hours}>
            <h3>
              <span>Working</span> Hours
            </h3>
            <h4>MONDAY-FRIDAY</h4>
            <p>9:00am To 8:00pm</p>

            <h4>SATURDAY</h4>
            <p>Close Day!</p>

            <h4>SUNDAY</h4>
            <p>Close Day!</p>
          </div>
          <div className={Style.links}>
            <h3>
              <span>Useful </span> Links
            </h3>
            <ul>
              
              <li>
                <a onClick={() => router.push("privacy-policy")}>Privacy & Policy</a>
              </li>
              {/* <li>
                <a onClick={() => router.push("terms-and-use")}>Terms Of Use</a>
              </li> */}
              <li>
                <a onClick={() => router.push("contact-us")}>Contact Us</a>
              </li>
              <li>
                <a onClick={() => router.push("/blogs")}>Blogs</a>
              </li>
              <li>
                <a onClick={() => router.push("/refund-policy")}>Refund Policy</a>
              </li>
            </ul>
          </div>
          <div className={Style.links}>
            <h3>
              <span>Social </span> Media
            </h3>
            <ul>
              <li>
                <a href="https://www.facebook.com/officialcabX/" target="_blank">Facebook </a>
              </li>
              <li>
                <a href="https://www.instagram.com/officialcabx" target="_blank">Instagram</a>
              </li>
              <li>
                <a href="https://www.youtube.com/@officialCabx" target="_blank">You Tube</a>
              </li>

              <li>
                <a href="#WhatsApp">WhatsApp</a>
              </li>
            </ul>
          </div>
          <div className={Style.hours}>
            <h3>
              <span>Head </span> Office
            </h3>
            <h4>LOCATION</h4>
            <p>402, H-140, Sector 63, Noida (UP) -201301</p>
            <h4>JOIN US</h4>
            <p>
              info@cabexpert.co <br /> 0129-417-6500
            </p>
          </div>
        </div>
        <div className={Style.city}>
          {" "}
          <Image
            src="/city-skiline-Copy.png"
            alt="car"
            height={400}
            width={1440}
            className={Style.cityimage}
          />
          <img
            src="/truck-2.png"
            alt="truck"
            width={120}
            height={50}
            className={Style.movingimage}
          />
          <img
            src="/truck-1.png"
            alt="truck"
            width={150}
            height={68}
            className={Style.movingimagetwo}
          />
          <img
            src="/truck-3.png"
            alt="truck"
            width={180}
            height={100}
            className={Style.movingimagethree}
          />
          
        </div>
      </div>
      <div style={{background:"black", padding: "20px 10px"}}>
        <p style={{textAlign:"center", color:"white"}}>Powered by <Link href={"https://epicglobal.co.in/"} target="_blank" className={Style.epic}> Epic Global Digital Solutions Pvt. Ltd.</Link> © 2024 All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
