import React, { useEffect } from "react";
import Style from "../navbar/header.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [menu, setMenu] = React.useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    console.log("menu");
  };

  useEffect(() => {
    if (menu) {
      document.body.classList.add("stop-scrolling"); // Add the stop-scrolling class to the body
    } else {
      document.body.classList.remove("stop-scrolling"); // Remove the stop-scrolling class from the body
    }
  }, [menu]);

  return (
    <header className={Style.mainheader}>
      {/* <div className={Style.topheder}>
        <div className={`${Style.topnav} container `}>
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
      </div> */}

      <div className={`${Style.topnav_two} container`}>
        <div>
          <Image
            onClick={() => router.push("/")}
            src="/Group214.png"
            className={`${Style.header_logo}`}
            alt="logo"
            height={72}
            width={150}
          />
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
              <a onClick={() => router.push("/contact-us")}>Contact us</a>
            </li>
            <li>
              <a onClick={() => router.push("/about-us")}>About Us</a>
            </li>
          </ul>
        </div>

        {menu ? (
          <div className="mb_menu_view">
            <div className={Style.mb_menu_logo}>
              <Image
                onClick={() => router.push("/")}
                src="/Group214.png"
                className={`${Style.header_logo_mb}`}
                alt="logo"
                height={72}
                width={150}
              />
            </div>
            <div className={Style.mb_menu_close}>
              <Image
                onClick={handleMenu}
                src="/close.png"
                alt="logo"
                height={42}
                width={42}
              />
            </div>
            <div className={Style.menu_two_mb}>
              <ul>
                <li>
                  <a href="#Pricing ">Pricing </a>
                </li>
                <li>
                  <a href="#Features">Features</a>
                </li>
                <li>
                  <a onClick={() => router.push("/contact-us")}>Contact us</a>
                </li>
                <li>
                  <a onClick={() => router.push("/about-us")}>About Us</a>
                </li>
              </ul>
            </div>
            <div className={Style.button_nav_mb}>
              <button className={Style.button_one}>Sign in</button>
              <button className={Style.button_two}>
                Create a free account
              </button>
            </div>
          </div>
        ) : null}

        <div className={Style.menu}>
          <Image
            onClick={handleMenu}
            src="/menu.png"
            alt="logo"
            height={42}
            width={42}
          />
        </div>
        <div className={Style.button_nav}>
          <a href="https://admin.cabexpert.co/">
            <button className={Style.button_one}>Sign in </button>
          </a>
          <a href="https://admin.cabexpert.co/signup">
            <button className={Style.button_two}>Create a free account</button>
          </a>
        </div>
      </div>
      {/* <div className={Style.header_parent}>
        <div className={Style.header}>
          <Image src="/Group214.png" alt="logo" height={72} width={150} />
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
                    src="/Group185.svg"
                    alt="search"
                    height={26}
                    width={25}
                  />
                  <Image
                    src="/Group186.svg"
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
