import React from "react";
import Style from "../footer/footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={Style.xaxa}>
      <div className={`${Style.footer} container`}>
        <div className={Style.foottop}>
          <Image src="/Group 214.png" alt="logo" height={72} width={150} />
          <span>
            We successfully cope with tasks of varying complexity, provide
            long-term guarantees and regularly master new technologies.
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
            <p>10:00am To 7:30pm</p>

            <h4>SUNDAY</h4>
            <p>Close Day!</p>
          </div>
          <div className={Style.links}>
            <h3>
              <span>Useful </span> Links
            </h3>
            <ul>
              <li>
                <a href="#Cab Booking ">Cab Booking </a>
              </li>
              <li>
                <a href="#Help Center">Help Center</a>
              </li>
              <li>
                <a href="#Privecy & Policy">Privecy & Policy</a>
              </li>
              <li>
                <a href="#Terms Of Use">Terms Of Use</a>
              </li>
              <li>
                <a href="#Contact Us">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className={Style.links}>
            <h3>
              <span>Social </span> Media
            </h3>
            <ul>
              <li>
                <a href="#Facebook ">Facebook </a>
              </li>
              <li>
                <a href="#Instagram">Instagram</a>
              </li>
              <li>
                <a href="#You Tube">You Tube</a>
              </li>
              <li>
                <a href="#Snapchat">Snapchat </a>
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
            <p>167 Williamson Plaza,Maggieberg,MT 09856</p>
            <h4>JOIN US</h4>
            <p>info@Yourgmail24.com</p>
          </div>
        </div>
        <div className={Style.city}>
          {" "}0
          <Image
            src="/city-skiline - Copy.png"
            alt="car"
            height={400}
            width={1440}
            className={Style.cityimage}
          />
          
          <img src="/truck-2.png" alt="truck" width={120} height={50} className={Style.movingimage} />
          <img src="/truck-1.png" alt="truck" width={150} height={68} className={Style.movingimagetwo} />
          <img src="/truck-3.png" alt="truck" width={180} height={100} className={Style.movingimagethree} />
         

        </div>
      </div>
    </div>
  );
};

export default Footer;
