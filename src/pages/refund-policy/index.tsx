import React from 'react'
import Footer from "@/component/footer";
import Header from "@/component/navbar";
import styles from "@/styles/privacy.module.scss";
import RefundPolicy from "@/component/refund-policy/refund-policy";

function index() {
  return (
    <>
    <div className={`${styles.privacy_box}`}>
     <Header />
      {/*  */}
        <RefundPolicy />


      {/*  */}
      <Footer />
      </div>
    </>
  )
}

export default index
