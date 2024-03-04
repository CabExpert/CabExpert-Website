import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./testimonials.module.scss";
const Testimonials = () => {
  return (
    <>
      <div className={styles.test}>
        <h2>Client Testimonials</h2>  
        <div className={styles.testbox}>
          {customer.map((value, index) => {
            return (
              <>
                <div className={styles.customer} key={index}>
                  <Image
                    src={value.Image}
                    alt="/Ellipse 28.png"
                    height={100}
                    width={100}
                  />
                  <h3>{value.name}</h3>
                  <h5>{value.place}</h5>
                  <p>{value.content}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default Testimonials;

const customer = [
  {
    Image: "/Ellipse 28.png",
    name: "Hithrik Soni",
    place: "Punjab",
    content:
      "Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings...",
  },
  {
    Image: "/Ellipse 28.png",
    name: "Hithrik Soni",
    place: "Punjab",
    content:
      "Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings...",
  },
  {
    Image: "/Ellipse 28.png",
    name: "Hithrik Soni",
    place: "Punjab",
    content:
      "Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings...",
  },
];
