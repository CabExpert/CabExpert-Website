import React from "react";
import styles from "@/styles/blogs.module.scss";
import Chart1 from "../../../public/BarChart1.png";
import Chart2 from "../../../public/BarChart2.png";
import Chart3 from "../../../public/BarChart3.png";
import ArrowUp from "../../../public/arrowup.png";
import ArrowDown from "../../../public/arrowdown.png";
import OverviewLines from "../../../public/overviewLines.png";

import Image from "next/image";

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
                            <span>
                                {" "}
                                <Image
                                    src={ArrowUp}
                                    className={`${styles.arrow}`}
                                    alt="location"
                                    width={500}
                                    height={500}
                                />
                                25%
                            </span>
                        </div>
                        <div>
                            <Image
                                src={Chart1}
                                className={`${styles.chart}`}
                                alt="location"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className={`${styles.left_div_container}`}>
                        <div className={`${styles.left_div1}`}>
                            <span>Orders</span>
                            <span>$5000</span>
                            <span>
                                <Image
                                    src={ArrowDown}
                                    className={`${styles.arrow}`}
                                    alt="location"
                                    width={500}
                                    height={500}
                                />
                                5%
                            </span>
                        </div>
                        <div>
                            <Image
                                src={Chart2}
                                className={`${styles.chart}`}
                                alt="location"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                    <div className={`${styles.left_div_container}`}>
                        <div className={`${styles.left_div1}`}>
                            <span>New Clients</span>
                            <span>$600</span>
                            <span>
                                <Image
                                    src={ArrowUp}
                                    className={`${styles.arrow}`}
                                    alt="location"
                                    width={500}
                                    height={500}
                                />
                                5%
                            </span>
                        </div>
                        <div>
                            <Image
                                src={Chart3}
                                className={`${styles.chart}`}
                                alt="location"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                </div>
                <div className={`${styles.overview_right}`}>
                    <div className={`${styles.right_header}`}>
                        <div>Revenue</div>
                        <div>
                            <span>
                                <li className={`${styles.listColor}`}></li>Individuals
                            </span>{" "}
                            <span>
                                <li className={`${styles.listColor2}`}></li>Businesses
                            </span>
                        </div>

                    </div>

                    <div className={`${styles.chartContainer}`}>
                        <div className={`${styles.right_number}`}><span>$200,000</span>
                            <span>$150,000</span>
                            <span>$100,000</span>
                            <span>$50,000</span>
                            <span>$0</span>
                        </div>
                        <Image
                            src={OverviewLines}
                            className={`${styles.chart}`}
                            alt="location"
                            width={500}
                            height={500}
                        /></div>

                </div>
            </div>
        </div>
    );
};

export default Overview;
