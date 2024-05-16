import Footer from "@/component/footer";
import Header from "@/component/navbar";
import React from "react";
import styles from "@/styles/terms.module.scss";
import TermsAndCondition from "@/component/terms-and-condition/terms-and-condition";

const index = () => {
  return (
    <div className={`${styles.terms_and_use}`}>
      <Header />
      <TermsAndCondition />
      <Footer />
    </div>
  );
};

export default index;
