import React from "react";
import styles from "@/styles/blogs.module.scss";

const Overview = () => {
  return (
    <div className={`${styles.overview}`}>
      <div className={`${styles.overview_head}`}>
        <span>Overview</span>
        <button className={`${styles.exportBtn}`}>Export</button>
      </div>
      <div className={`${styles.overview_container}`}>
        <div className={`${styles.overview_left}`}>
          <div className={`${styles.left_div_container}`}>
            <div className={`${styles.left_div1}`}>
              <span>Expenses</span>
              <span>$72,000</span>
              <span>25%</span>
            </div>
            <div>Image</div>
          </div>
        </div>
        <div className={`${styles.overview_right}`}></div>
      </div>
    </div>
  );
};

export default Overview;
