import Footer from "@/component/footer";
import Header from "@/component/navbar";
import styles from "../../styles/thankyou.module.scss";
import Image from "next/image";

const thankyou = () => {
  return (
    <>
      <Header />

      <div className={styles.ty_section}>
        <h1>Thank You</h1>
        <p>
          Thank you for confirming. We will contact you within the next 24 hours
          <br />
          using the email and phone number you provided. 
        </p>
        <div className={styles.box}>
          <h3>Like & Share</h3> 
          <div className={styles.social_icons}>
            <Image src="/fb.png" alt="fb" width={28} height={26} />
            <Image
              src="/twitter_orange.png"
              alt="twitter"
              width={28}
              height={26}
            />
            <Image src="/google.png" alt="google" width={28} height={26} />
            <Image src="/insta.png" alt="insta" width={28} height={26} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default thankyou;
