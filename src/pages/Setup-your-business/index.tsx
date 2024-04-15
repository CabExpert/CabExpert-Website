import Navbar from "@/component/navbar";
import styles from "@/styles/setup-your-business.module.scss";
import Image from "next/image";
import { useState } from "react";

export default function Setup() {
  const [typeToggle, setTypeToggle] = useState(false);
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h2>Almost done! Setup your business</h2>
        <form>
          <div className={styles.logoUpload}>
            <label htmlFor="logo">
              <img src="/company_logo_placeholder.png" alt="Company Logo" />
            </label>
            <input type="file" id="logo" />
          </div>
          <div className={styles.setupform}>
            <div>
              <input
                type="text"
                id="companyName"
                className={styles.inputField}
                placeholder="Company Name"
              />
            </div>
            <div>
              <input
                type="tel"
                id="phoneNumber"
                className={styles.inputField}
                placeholder="Phone Number"
              />
            </div>
            <div>
              <div className={styles.box}>
                <p tabIndex={0}>Verification</p>
                <p tabIndex={1}>Enter your OTP code number:</p>
                <div className={styles.inputContainer}>
                  <input
                    type="text"
                    className={styles.input}
                    style={{ width: "300px" }}
                  />
                  <button className={styles.verifyButton}>Verify</button>
                </div>
                <p>Verification code is sent to this number:</p>
              </div>
            </div>
            <div className={styles.type_parent}>
              <div
                className={styles.business_type}
                onClick={() => setTypeToggle(!typeToggle)}
              >
                <h3>Business Type</h3>
                <Image
                  src="/arrow-down.png"
                  alt="arrow-down"
                  width={16}
                  height={16}
                />
              </div>
              {typeToggle && (
                <div>
                  <div className={styles.toggle_parent}>
                    <label htmlFor="regi">Registered</label>
                    <input type="radio" name="business" id="regi" />
                  </div>
                  <div className={styles.toggle_parent}>
                    <label htmlFor="unreg">Unregistered</label>{" "}
                    <input type="radio" name="business" id="unreg" />
                  </div>
                </div>
              )}
            </div>
            <div>
              <input
                type="GST number"
                id="GST number"
                className={styles.inputField}
                placeholder="GST number"
              />
            </div>
            <div>
              <input
                type="Address"
                id="Address"
                className={styles.inputField}
                placeholder="Address"
              />
            </div>
            <div>
              <input
                type="Pin"
                id="Pin"
                className={styles.inputField}
                placeholder="Pin"
              />
            </div>
            <div>
              <input
                type="City"
                id="City"
                className={styles.inputField}
                placeholder="City"
              />
            </div>
            <div className={styles.country}>
              <select name="Country" id="Country">
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
              <div className={styles.check}>
              <input type="checkbox" style={{ width: 12, height: 12,}} />
              
              <p>
                By signing up, I agree with the <span>Terms of Use</span> &{" "}
                <span>Privacy Policy</span>
              </p>
            </div>
            <div className={styles.buttonn}>
            <button type="submit" className={styles.continuebutton}>
            Setup my business
          </button>
          </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
