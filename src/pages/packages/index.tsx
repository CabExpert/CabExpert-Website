import Footer from "@/component/footer";
import Header from "@/component/navbar";
import styles from "../../styles/packages.module.scss";
import Image from "next/image";
import Testimonials from "@/component/testimonials";
import { useState } from "react";
import StarSvgIcon from "@/component/svg/star_icon";
import KingSvgIcon from "@/component/svg/king_icon";
import OrangeStarSvgIcon from "@/component/svg/orange_star_icon";

const Packages = () => {
  const [showFaq, setshowFaq] = useState("");
  const faqToggle = (value: any) => {
    showFaq === "" ? setshowFaq(value) : setshowFaq("");
  };
  const [color, setColor] = useState("");
  return (
    <>
      <Header />
      <div className={`${styles["first_sec"]} `}>
        <h2 className={`${styles.heading} ${styles.center}`}>
          Choose your plan
        </h2>
        <p className={`${styles.para} ${styles.center}`}>
          We’ve got a plan that’s perfect for you
        </p>
        <div className={styles.lists}>
          <p>
            <span></span>No setup cost
          </p>
          <p>
            <span></span>No upfront payment
          </p>
        </div>
        <div className={styles.box}>
          <Image
            src="/box-package-icon1.png"
            alt="box-icon"
            width={80}
            height={75}
          />
          <div className={styles.circle}>
            <span></span>
          </div>
          <h3>Free Account</h3>
          <ul>
            <li>
              <Image src="/vector.jpg" alt="box-icon" width={7} height={9} />{" "}
              Unlimited setup of the customer
            </li>
            <li>
              <Image src="/vector.jpg" alt="box-icon" width={7} height={9} />{" "}
              Unlimited setup of the suppliers
            </li>
            <li>
              <Image src="/vector.jpg" alt="box-icon" width={7} height={9} />{" "}
              Unlimited setup of the drivers
            </li>
            <li>
              <Image src="/vector.jpg" alt="box-icon" width={7} height={9} />{" "}
              Unlimited setup of the vehicles
            </li>
          </ul>
          <button>select</button>
        </div>
      </div>
      <div className={styles.second_sec}>
        {inner_Box.map((value, index) => {
          return (
            <div
              className={`${styles.innerBox} ${
                color === value.title ? "hover_card" : "#000"
              }`}
              key={index}
              onMouseEnter={() => setColor(value.title)}
              onMouseLeave={() => setColor("")}
            >
              <div>
              {value.title === "Essential Bundle A" && (

                <StarSvgIcon color={color === value.title ? "#fff" : "#000"} />
              )}

              {value.title === "Essential Bundle B" && (
                <StarSvgIcon color={color === value.title ? "#fff" : "#000"} />
              )}

              {value.title === "Standard Package" && (
                <KingSvgIcon color={color === value.title ? "#fff" : "#000"} />
              )}

              {value.title === "Premium Collection A" && (
                <OrangeStarSvgIcon
                  color={color === value.title ? "#fff" : "#FF9900"}
                />
              )}

              {value.title === "Premium Collection B" && (
                <OrangeStarSvgIcon
                  color={color === value.title ? "#fff" : "#FF9900"}
                />
              )}
</div>
              <div className={styles.hollowCircle}>
                <span className="hover"></span>
              </div>
              <h4>{value.title}</h4>
              <p>
                Per month duties <br /> <span>{value.duties} </span>
              </p>
              <p>
                Per month cost <br /> <span>{value.cost}</span>
              </p>
              <button style={{display:"none"}}>Upgrade</button>
            </div>
          );
        })}
      </div>
      <div className={styles.third_sec}>
        <ul>
          <li>
            <div className={styles.icon}>
              <Image src="/bell.png" alt="bell-icon" width={15} height={16} />
            </div>{" "}
            <span>Local SMS charges applicable at Rs.0.25/SMS</span>
          </li>
          <li>
            <div className={styles.icon}>
              <Image src="/mail.png" alt="mail-icon" width={17} height={11} />
            </div>{" "}
            <span>Email is free</span>
          </li>
          <li>
            <div className={styles.icon}>
              <Image
                src="/location-pin.png"
                alt="notification"
                width={17}
                height={17}
              />
            </div>{" "}
            <span>Driver Tracking 1500 per month single driver </span>
          </li>
        </ul>
        <p>*All charges are exclusive of taxes.</p>
      </div>
      <div className={styles.forth_sec}>
        <h2>Frequently asked questions</h2> 
        <p>Exercitation dolore reprehenderit fugi</p>
        <div className={styles.faq}>
          {faq.map((value, index) => {
            return (
              <div key={index} className={styles.bb} onClick={() => faqToggle(value.ques)}>
                <h4 >
                  {" "}
                  <span> {value.ques}</span>{" "}
                  <span>
                    <Image
                      src="/Chevron-up-large.png"
                      className={`${showFaq === value.ques ? "" : "rotate"} ${
                        styles.bg
                      }`}
                      alt="dropdown"
                      width={15}
                      height={15}
                    />
                  </span>
                </h4>
                {showFaq === value.ques && <p>{value.ans}</p>}
              </div>
            );
          })}
        </div>
      </div>
      <Testimonials />
      <Footer />
    </>
  );
};
export default Packages;

const faq = [
  {
    ques: "Complete access to the Cabx platform for business management?",
    ans: "Nisi do sunt veniam esse quis ex labore Lorem et. Excepteur labore minim ea ea officia labore duis duis Lorem est tempor labore sint sint. Ipsum nostrud velit et qu",
  },
  {
    ques: "Cabx Passenger, Driver and Supplier Android apps?",
    ans: "Nisi do sunt veniam esse quis ex labore Lorem et. Excepteur labore minim ea ea officia labore duis duis Lorem est tempor labore sint sint. Ipsum nostrud velit et qu",
  },
  {
    ques: "All future platform-level upgrades?",
    ans: "Nisi do sunt veniam esse quis ex labore Lorem et. Excepteur labore minim ea ea officia labore duis duis Lorem est tempor labore sint sint. Ipsum nostrud velit et qu",
  },
  {
    ques: "Initial training and coaching of staff on the Cabx platform?",
    ans: "Nisi do sunt veniam esse quis ex labore Lorem et. Excepteur labore minim ea ea officia labore duis duis Lorem est tempor labore sint sint. Ipsum nostrud velit et qu",
  },
  {
    ques: " Customer support as and when needed (Monday to Friday 10am - 7pm)?",
    ans: "Nisi do sunt veniam esse quis ex labore Lorem et. Excepteur labore minim ea ea officia labore duis duis Lorem est tempor labore sint sint. Ipsum nostrud velit et qu",
  },
];

const inner_Box = [
  {
    imageUrl: "/vector.svg",
    title: "Essential Bundle A",
    duties: "0 to 100",
    cost: "₹ 1000/month",
  },
  {
    imageUrl: "/vector.svg",
    title: "Essential Bundle B",
    duties: "101 to 250",
    cost: "₹ 2000/month",
  },
  {
    imageUrl: "/Group.svg",
    title: "Standard Package",
    duties: "251 to 400",
    cost: "₹ 3000/month",
  },
  {
    imageUrl: "/Group550.svg",
    title: "Premium Collection A",
    duties: "401 to 1000",
    cost: "₹ 4000/month",
  },
  {
    imageUrl: "/Group550.svg",
    title: "Premium Collection B",
    duties: "1001 to 2000",
    cost: "₹ 5000/month",
  },
];
