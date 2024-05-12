import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./testimonials.module.scss";
import { useEffect, useState } from "react";
const Testimonials = () => {

  const [places, setPlaces] = useState<any>([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      try {
        const response = await fetch('/api/places?query=CabX');
        const data = await response.json();

       
        setPlaces(data?.result);
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    };
    
    fetchPlaces();
  }, []);
 const reviews = places?.reviews;
 console.log(reviews,"rrrrrrrrrrrr");
  return (
    <>
      <div className={styles.testHeading}>
        <h2>Client Testimonials</h2>
      </div>

      <div className={styles.test}>
        <div className={styles.testbox} style={{scrollbarWidth:"thin"}}>
          {reviews?.map((value:any, index:number) => {
            return (
              <>
                <div className={styles.customer} key={index}>
                  <Image
                    src={value?.profile_photo_url}
                    alt="/Ellipse28.png"
                    height={100}
                    width={100}
                  />
                  <h3>
                    {/* {value.name} */}
                    {value?.author_name}
                  </h3>
                  <h5>{value?.relative_time_description}</h5>
                  <p>{value?.text}</p>
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
    Image: "/Ellipse28.png",
    name: "Hithrik Soni",
    place: "Punjab",
    content:
      "Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings...",
  },
  {
    Image: "/Ellipse28.png",
    name: "Hithrik Soni",
    place: "Punjab",
    content:
      "Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings...",
  },
  {
    Image: "/Ellipse28.png",
    name: "Hithrik Soni",
    place: "Punjab",
    content:
      "Good to have transportation available in places and times it is otherwise hard to find, but the app has always been a bit difficult to use especially how it works or doesn't with large font phone settings...",
  },
];
