import React, { useEffect } from "react";
import Style from "../navbar/header.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "@/reducers/tokenSlice";
import Link from "next/link";
import { RootState } from "@/store";
import ModelView from "../model";

const Header = () => {
  const router = useRouter();
  const [menu, setMenu] = React.useState(false);
  const [packageModel, setPackageModel] = React.useState(false);
  const dispatch = useDispatch();
  const handleMenu = () => {
    setMenu(!menu);
    console.log("menu");
  };
  // Example how to set token value in redux state
  useEffect(() => {
    const setAuthToken = (token: any) => {
      dispatch(setToken(token));
    };
    let token = "0123456789";
    setAuthToken(token);
  }, []);

  useEffect(() => {
    if (menu) {
      document.body.classList.add("stop-scrolling"); // Add the stop-scrolling class to the body
    } else {
      document.body.classList.remove("stop-scrolling"); // Remove the stop-scrolling class from the body
    }
  }, [menu]);

  const selectedPackage = useSelector(
    (state: RootState) => state.package.selectedPackage
  );

  const handleClick = () => {
    router.push("/packages");
  };

  return (
    <header className={Style.mainheader}>
      <ModelView show={packageModel}>
        <Image
          src={"/cross/close-line.png"}
          alt="close"
          width={20}
          height={20}
          onClick={() => setPackageModel(false)}
        />
        <div className="text-center mr-top-10">
          <h4>Please select the package</h4>
          <p className="mr-top-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus
            commodi fugiat sapiente optio! Eius voluptas culpa repudiandae quo
            nostrum optio dignissimos enim ducimus quis ex explicabo eos minus
            blanditiis quidem laudantium, ipsam itaque numquam, ipsa rerum illum
            voluptatum ea laboriosam animi? Fugit dolore, eos ut deserunt vel
            blanditiis assumenda reprehenderit nam aliquid. Quis sed tempore
            blanditiis, aspernatur, consequatur, sunt repellendus amet impedit
            corrupti neque libero in! Iusto quod dicta vitae adipisci, id
            deleniti veniam provident molestiae quidem earum corrupti voluptate
            aliquam harum nam ad suscipit consequatur eveniet aliquid neque
            tempore itaque eligendi omnis ducimus. Quam perspiciatis aperiam
            debitis sit nihil?
          </p>

          <div className={`${Style.button_nav} mr-top-20`}>
            <button
              className={Style.button_two}
              onClick={() => router.push("/packages")}
            >
              Continue
            </button>
          </div>
        </div>
      </ModelView>
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
              <a onClick={() => router.push("/packages")}>Packages</a>
            </li>

            <li>
              <a onClick={() => router.push("/contact-us")}>Contact us</a>
            </li>
            <li>
              <a onClick={() => router.push("/about-us")}>About Us</a>
            </li>
            <li>
              <a onClick={() => router.push("/blogs")}>Blogs</a>
            </li>
          </ul>
        </div>

        {menu ? (
          <div className="mb_menu_view">
            <div style={{}}>
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
                  className=""
                />
              </div>
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
              <button className={Style.button_two} onClick={() => router.push("/packages")}>
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
          <Link href="https://admin.cabexpert.co/">
            <button className={Style.button_one}>Sign in</button>
          </Link>

          <button className={Style.button_two} onClick={handleClick}>
            Create a free account
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
