import React from "react";
import Style from "../navbar/header.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header className={Style.mainheader}>
      <div className={Style.topheder}>
      <div className={`${Style.topnav} container `} >
        <div className={`${Style.text_one} `}>
          Cabx Taxi Service & Transport Solutions!
        </div>
        <div className={Style.righttop}>
          <div className={Style.areas}>
            <ul>
              <li>
                <a href="#Help">Help</a>
              </li>
              <li>
                <a href="#Support">Support</a>
              </li>
              <li>
                <a href="#FAQ">FAQ</a>
              </li>
            </ul>
          </div>
          <div className={Style.socialmedia}>
            <ul>
              <li>
                <Image
                  src="/Vector (1).png"
                  alt="facebook"
                  width="15"
                  height="15"
                />
              </li>
              <li>
                <Image
                  src="/twitter.png"
                  alt="twitter"
                  width="15"
                  height="15"
                />
              </li>
              <li>
                <Image
                  src="/Vector (3).png"
                  alt="google"
                  width="15"
                  height="15"
                />
              </li>
              <li>
                <Image
                  src="/Vector (4).png"
                  alt="instagram"
                  width="15"
                  height="15"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      
      <div className={`${Style.topnav_two} container`}>
        <div>
          <Image src="/Group 214.png" alt="logo" height={72} width={150} />
        </div>
        <div className={Style.menu_two}>
          <ul>
            <li>
              <a href="#Pricing ">Pricing </a>
            </li>
            <li>
              <a href="#Features">Features</a>
            </li>
            <li>
              <a href="#Contact us">Contact us</a>
            </li>
            <li>
              <a href="#About Us">About Us</a>
            </li>
          </ul>
        </div>
        <div className={Style.button_nav}>
          <button className={Style.button_one}>sign in</button>
          <button className={Style.button_two}>Create a free account</button>
        </div>
      </div>
      {/* <div className={Style.header_parent}>
        <div className={Style.header}>
          <Image src="/Group 214.png" alt="logo" height={72} width={150} />
          <div className={Style.icons}>
            <ul>
              <li>
                <div>
                  <Image
                    src="/phone-call-icon 1.png"
                    alt="phone"
                    height={28}
                    width={28}
                  />
                </div>
                <div>
                  <span>Call Us Now</span>
                  <p>5267-214-392</p>
                </div>
              </li>
              <li>
                <div>
                  <Image
                    src="/envelope-open-icon 1.png"
                    alt="email"
                    height={28}
                    width={28}
                  />
                </div>
                <div>
                  <span>Email Now</span>
                  <p>Info.Carx@mail.com</p>
                </div>
              </li>
              <li>
                <div>
                  <Image
                    src="/location-pin-icon 1.png"
                    alt="email"
                    height={28}
                    width={28}
                  />
                </div>
                <div>
                  <span>Halk Street</span>
                  <p>New Delhi.India-110096</p>
                </div>
              </li>
            </ul>

            <div className={Style.toprightnavbar}>
              <div className={Style.rightNav_yellow}>
                <ul>
                  <li>
                    <a href="#Home">Home</a>
                  </li>
                  <li>
                    <a href="#About Us">About Us</a>
                  </li>
                  <li>
                    <a href="#Contact us">Contact us</a>
                  </li>
                  <li>
                    <a href="#Packages">Packages</a>
                  </li>
                </ul>
                <div className={Style.line}></div>
                <div className={Style.search}>
                  <Image
                    src="/Group 185.svg"
                    alt="search"
                    height={26}
                    width={25}
                  />
                  <Image
                    src="/Group 186.svg"
                    alt="search"
                    height={26}
                    width={25}
                  />
                </div>
              </div>
              <div className={Style.book}>
              <a href="#About Us">Book a Taxi</a>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </header>
  );
};

export default Header;
