import Navbar from "@/component/navbar";
import styles from "@/styles/Signup.module.scss";
import { useRouter } from "next/router";

export default function Signup() {
  const router = useRouter();
  return (
    <>
      <Navbar />

      <div className={`${styles.register} container `}>
        <h2>REGISTRATION</h2>
        <form className={styles.form}>
          <div className={styles.name}>
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              placeholder="First Name"
              required
            />

            <input
              type="text"
              id="LastName"
              name="LastName"
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Re-enter Password"
              required
            />
            <div className={styles.check}>
              <input type="checkbox" style={{ width: 12, height: 12,}} />
              
              <p>
                By signing up, I agree with the <span>Terms of Use</span> &{" "}
                <span>Privacy Policy</span>
              </p>
            </div>
          </div>
          <button type="submit" className={styles.continuebutton} onClick={()=>router.push("/Setup-your-business")}>
            Continue
          </button>
        </form>
      </div>
    </>
  );
}
