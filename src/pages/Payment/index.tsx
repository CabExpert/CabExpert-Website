import Navbar from "@/component/navbar";
import styles from "@/styles/Payments.module.scss";
import Image from "next/image";

export default function Payments() {
  return (
    <>
      <Navbar />
      <div className={`${styles.cards} container`}>
        <div className={styles.outerbox}>
        <div className={styles.maincardbox}>
          <div className={styles.carddd}>
            <div className={styles.card_container}>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <div className={styles.cardimage}>
                <Image
                  src="/Group 564.png"
                  alt="image"
                  className={styles.contactimage_image}
                  width={78}
                  height={47}
                />
              </div>
            </div>
            <div className={styles.card_container}>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <div className={styles.cardimage}>
                <Image
                  src="/image 3.png"
                  alt="image"
                  className={styles.contactimage_image}
                  width={78}
                  height={23}
                />
              </div>
            </div>
            <div className={styles.card_container}>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              <div className={styles.cardimage}>
                <Image
                  src="/image 4.png"
                  alt="image"
                  className={styles.contactimage_image}
                  width={85}
                  height={105}
                />
              </div>
            </div>
          </div>

          <div className={styles.editcard}>
            <div className={styles.cardnumberr}>
              <h3>Card Number</h3>
              <p>Enter the 16-didit card number on the card</p>
            </div>
            <div className={styles.edit}>
              <Image
                src="/edit-2-svgrepo-com 1.png"
                alt="edit"
                height={15}
                width={15}
              />
              <span>Edit</span>
            </div>
          </div>

          <div className={styles.cardnumber}>
            <div className={styles.carddetails}>
              <Image src="/Group 564.png" alt="card" width={40} height={25} />

              <input
                type="Num"
                id="1111"
                className={styles.inputField}
                placeholder="1111"
              />
              <span>-</span>
              <input
                type="Num"
                id="2222"
                className={styles.inputField}
                placeholder="2222"
              />
              <span>-</span>
              <input
                type="Num"
                id="3333"
                className={styles.inputField}
                placeholder="3333"
              />
              <span>-</span>
              <input
                type="Num"
                id="4444"
                className={styles.inputField}
                placeholder="4444"
              />
            </div>
            <div>
              <Image
                src="/tick-circle-svgrepo-com 1.png"
                alt="tick"
                width={23}
                height={23}
              />
            </div>
          </div>

          <div className={styles.cvv}>
            <div className={styles.cvvnumber}>
              <h3>CVV Number</h3>
              <p>Enter the 3 or 4 digit number on the card</p>
            </div>
            <div className={styles.Number}>
              <input
                type="Num"
                id="111"
                className={styles.inputField}
                placeholder="111"
              />
              <Image src="/Group 568.png" alt="pin" width={18} height={18} />
            </div>
          </div>

          <div className={styles.ExpiryDate}>
            <div className={styles.date}>
              <h3>Expiry Date</h3>
              <p>Enter the expiration date of the card</p>
            </div>

            <div className={styles.Expiry}>
              <input type="text" id="11" placeholder="11" maxLength={2}/>
              <span>/</span>
              <input type="text" id="12" placeholder="11" maxLength={2} tabIndex={2}/>
            </div>
          </div>
          <div className={styles.paynoww}>        <button className={styles.paynow}>Pay Now</button> </div>
        </div>
        <div className={styles.dbcardbox}>
          <Image src="/dbcardbox.png" alt="dbcard" width={436} height={546} />
        </div>
        </div>

      </div>
    </>
  );
}
