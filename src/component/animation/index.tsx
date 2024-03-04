import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./animation.module.scss";
import React from "react";

const Animation = () => {
  return (
    <>
      <div className={styles.anima} >
        <div className={styles.slideboxone}>
          <div className={styles.textone}>
            <span>Digital Duty Slips </span>
            <p>with Cabx</p>
          </div>
          <div className={styles.image}>
            <Image
              className={styles.onee}
              src="/overImagee.png"
              alt="overimage"
              height={165}
              width={218}
            />
            <Image
              className={styles.twoo}
              src="/mytaxi.png"
              alt="overimage"
              height={287}
              width={205}
            />
          </div>
        </div>
        <div className={styles.slideboxone}>
          <div className={styles.textone}>
            <span>Digital Duty Slips </span>
            <p>with Cabx</p>
          </div>
          <div className={styles.image}>
            <Image
              className={styles.onee}
              src="/overImagee.png"
              alt="overimage"
              height={165}
              width={218}
            />
            <Image
              className={styles.twoo}
              src="/mytaxi.png"
              alt="overimage"
              height={287}
              width={205}
            />
          </div>
        </div>
        <div className={styles.slideboxone}>
          <div className={styles.textone}>
            <span>Digital Duty Slips </span>
            <p>with Cabx</p>
          </div>
          <div className={styles.image}>
            <Image
              className={styles.onee}
              src="/overImagee.png"
              alt="overimage"
              height={165}
              width={218}
            />
            <Image
              className={styles.twoo}
              src="/mytaxi.png"
              alt="overimage"
              height={287}
              width={205}
            />
          </div>
        </div>
        <div className={styles.slideboxone}>
          <div className={styles.textone}>
            <span>Digital Duty Slips </span>
            <p>with Cabx</p>
          </div>
          <div className={styles.image}>
            <Image
              className={styles.onee}
              src="/overImagee.png"
              alt="overimage"
              height={165}
              width={218}
            />
            <Image
              className={styles.twoo}
              src="/mytaxi.png"
              alt="overimage"
              height={287}
              width={205}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Animation;
