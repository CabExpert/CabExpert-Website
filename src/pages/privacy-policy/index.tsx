import Footer from "@/component/footer";
import Header from "@/component/navbar";
import React from "react";
import styles from "@/styles/privacy.module.scss";
import PrivacyPolicy from "@/component/privacy-policy/privacy-policy";

const index = () => {
  return (
    <div className={`${styles.privacy_box}`}>
      <Header />
      {/*  */}
        <PrivacyPolicy />
      {/*  */}
      <Footer />
    </div>
  );
};

export default index;
