import React from 'react'
import Navbar from "@/component/navbar";
import Head from 'next/head';
import styles from "@/styles/about-us.module.scss";
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';



const FreePackage = () => {
  const router = useRouter();
  const dispatch = useDispatch();


  /// need to clear dispatch here as well 
  React.useEffect(() => {
    return () => {
      dispatch({type: "package/clearPackage"})
    }
  }, [])
  return (
    <>
    <Head>
      <title>Free Account | CabX</title>
      <meta
        name="description"
        content="Elevate your taxi service to new heights with our cutting-edge cab management system. Our platform offers  driver scheduling, customer bookings, and real-time tracking. Explore Now"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/fabicon.png" />
      <link rel= "canonical" href= "/free-package" />
    </Head>
    <Navbar />

    <div className={`${styles.about} container `}>
      <div className={styles.cabx}>
        {/* <h4>Take Part In </h4> */}
        <div className={styles.logo}>
          <Image
            src="/icons/sucess.png"
            alt="logo"
            className={styles.cablogo}
            width={100}
            height={100}
          /> 
        </div>
      </div>

      <div className={styles.freePara}>
        <p>Your free subscription request has been submitted successfully</p>
      </div>
      <div className={styles.buttonn} 
      onClick={()=> router.push("https://admin.cabexpert.co/")}
      >
      <button
                  type="submit"
                  className={styles.continuebutton} 
                  style={{
                    backgroundColor: "#ff9900",
                  }}
                >
                Login
                </button>
        </div>
 
    </div>

     
  </>
  )
}

export default FreePackage
