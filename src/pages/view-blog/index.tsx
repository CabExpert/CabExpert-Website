import Header from "@/component/navbar";
import React from "react";
import styles from "@/styles/blogs.module.scss";
import BannerImage from "../../../public/view-blog-cover.png";
import BannerCar from "../../../public/view-blog-car.png";
import BannerLogo from "../../../public/view-blog-logo.png";
import Oval from "../../../public/Oval.png";
import Dots from "../../../public/dots.png";
import Unfilled from "../../../public/unfilledCircle.png";
import CTAGraph from "../../../public/ctagraph.png";
import RevAndOrders from "../../../public/revAndOrders.png";
import MethodChart from "../../../public/methodChart.png";
import HalfPhone from "../../../public/halfPhone.png";
import PaperPlane from "../../../public/Paperplane.png";

import Image from "next/image";
import Overview from "@/component/overview";
import Footer from "@/component/footer";

const ViewBlog = () => {
  return (
    <div className={`${styles.view_blog_main_container}`}>
      <Header />

      <div className={`${styles.view_blog_container}`}>
        <h2>
          Car Rental software boosts retail business's revenue by 55%+ in 2024
        </h2>

        <div className={`${styles.view_blog_banner}`}>
          <Image
            src={BannerLogo}
            className={`${styles.view_blog_banner_logo_image}`}
            alt="location"
            width={1200}
            height={200}
          />
          <Image
            src={BannerImage}
            className={`${styles.view_blog_banner_image}`}
            alt="location"
            width={1200}
            height={200}
          />
          <Image
            src={BannerCar}
            className={`${styles.view_blog_banner_car}`}
            alt="location"
            width={1200}
            height={200}
          />
        </div>
        <div className={`${styles.blog_para}`}>
          <span>
            As a child, I have travelled a lot in trains across India. I
            remember my excitement as a train would slowly approach the
            platform, waiting to take me to somewhere new and totally
            unexplored.
          </span>

          <span>
            I carried this dream with me when I moved to the UK and wanted to
            explore every nook and corner of this beautiful and diverse European
            continent, to experience the sights and sound of new cultures and
            their culinary delights. And this, unfortunately, led to many
            uncomfortable encounters with car rental companies. Over 85% of
            customers who regularly rent cars or vans have expressed
            dissatisfaction in their rental experience.
          </span>

          <span>
            Now compare this to their No. 1 reason for renting: 70% of people
            hire cars for ‘convenience’.I am an avid traveller and this was a
            chance to fix problems faced by my fellow travelers and myself when
            renting cars.With Cabx, I am able to carry out my vision of creating
            a consumer-centrical rental experience that unlocks the true value
            of ‘convenience’ that customers desire.{" "}
          </span>

          <span>
            Our goal is to create more transparency and drive best practices in
            the industry. At Cabx, we believe that transforming the industry
            from the inside out is key to solving customer problems.
          </span>
        </div>

        <div className={`${styles.cabSuggest}`}>
          <h2>Cabxsuggest</h2>
          <p>
            Want more traffic? Cabxsuggest shows you how to win the game of SEO.{" "}
            <br />
            Just type in a domain or a keyword to get started
          </p>

          <div className={`${styles.search_bar}`}>
            <input type="text" placeholder=" Billing and Invoicing" />
            <button>Search</button>
          </div>
          <span className={`${styles.para_below_search}`}>
            <p>
              For example, a search for the phrase “Billing and Invoicing”
              generates the following:
            </p>
          </span>
        </div>
        <div>
          <Overview />
        </div>

        <div className={`${styles.cabSuggest}`}>
          <p>
            Our goal is to create more transparency and drive best practices in
            the industry. At Cabx, we believe that transforming the industry
            from the inside out is key to solving customer problems.
          </p>
        </div>

        <div className={`${styles.callToAction}`}>
          <div className={`${styles.CTA}`}>
            <h2>Call to Action</h2>
            <span>
              Qui ut exercitation officia proident enim non tempor tempor ipsum
              ex nulla ea adipisicing sit consequat enim elit cupidatat o
            </span>
            <button>Book A Call</button>
          </div>

          <Image
            src={Oval}
            className={`${styles.oval}`}
            alt="location"
            width={220}
            height={220}
          />
          <Image
            src={Dots}
            className={`${styles.dots}`}
            alt="location"
            width={200}
            height={200}
          />
          <Image
            src={Unfilled}
            className={`${styles.unfilled}`}
            alt="location"
            width={200}
            height={200}
          />
          <Image
            src={Dots}
            className={`${styles.dots2}`}
            alt="location"
            width={200}
            height={200}
          />
        </div>
        <div className={`${styles.revenueOrders}`}>
          <div>
            <p>
              To use AI in professional services effectively, you need to
              analyze how it can simplify your day-to-day processes and how this
              fits into your business goals. For instance, if you want to
              improve customer experience, you can use AI to analyze data, spot
              patterns, and personalize customer responses. Or if
              decision-making is taking up valuable human resources, AI can
              analyze your financial data and help you decide where to put your
              resources.
            </p>
            <p>
              Another area to focus on is the repetitive tasks that AI could
              handle for you. <br />
              Think about system monitoring, email management, virtual
              assistants, workflow automation, document processing, data
              analysis, research, and manual task management.
            </p>
          </div>
          <div className={`${styles.revenueOrdersGraph}`}>
            {/* <span>Statistics</span>
                <span>
                  <select name="" id="">
                    <option value="This week">This Week</option>
                  </select>
                </span> */}

            <Image
              src={CTAGraph}
              className={`${styles.ctaChart}`}
              alt="location"
              width={350}
            />
          </div>
        </div>
        <div className={`${styles.revAndOrders}`}>
          <Image
            src={RevAndOrders}
            className={`${styles.revOrdersImage}`}
            alt="location"
            width={1180}
            height={500}
            objectFit="contain"
          />
        </div>
        <div className={`${styles.methodology}`}>
          <b>Our Data Methodology</b>
          <p>
            To collect this data, NP Digital surveyed 1,000 retail professionals
            across the U.S. Each survey participant fell into one of three
            categories:
          </p>
          <ul>
            <li>Retail manager</li>
            <li>Retail owner</li>
            <li>Retail employees involved in marketing or advertising</li>
          </ul>
          <span>
            Our goal is to show insights into how these professionals view the
            overall retail trends, specific challenges, and their action plans
            to combat the current obstacles and seize upcoming opportunities.
          </span>

          <p>Developing a Comprehensive AI Strategy</p>

          <p>
            Once you’ve identified areas, you’re ready to develop a strategy to
            integrate AI, improve efficiency, and lower costs.
          </p>

          <div className={`${styles.flexmethod}`}>
            <div>
              <Image
                src={MethodChart}
                className={`${styles.methodImage}`}
                alt="location"
                width={300}
                height={500}
                objectFit="contain"
              />
            </div>
            <div className={`${styles.flexmethodRight}`}>
              <span>
                Begin by assessing your company’s readiness for AI adoption.
                You’ll want to:
              </span>
              <ul>
                <li>
                  Address any challenges related to the quality (and
                  availability) of your data
                </li>
                <li>
                  Assess your current IT infrastructure and your team’s skills
                  and expertise.
                </li>
                <li>
                  Review your current AI tools, which tools you’ll need, and how
                  they integrate with existing systems.
                </li>
              </ul>
              <span>
                Allocate the resources for introducing AI and build some flex
                into your budget if you need to change track and make further
                investments. <br />
                Next, define your business objectives and evaluate what AI can
                do and where it can deliver the most value. For example, if
                repetitive tasks take over your day, consider implementing AI
                solutions that handle those tasks, freeing you up for more
                creative or complex business objectives. <br />
                Decide how you’ll measure the use of AI in professional services
                and its impact. Is it getting you closer to your goals? If the
                answer’s “Yes,” keep doing what you’re doing.
              </span>
            </div>
          </div>

          <div className={`${styles.something}`}>
            <div>
              <h3>Looking for something</h3>
              <span>Subscribe to our newsletter</span>
              <span>
                <input type="text" placeholder="Your Email Address" />
                <button>Subscribe</button>
              </span>
            </div>
            <Image
              src={HalfPhone}
              className={`${styles.halfPhone}`}
              alt="location"
              width={300}
              height={500}
              objectFit="contain"
            />
            <button>
              {" "}
              <Image
                src={PaperPlane}
                className={`${styles.plane}`}
                alt="location"
                width={500}
                height={500}
                objectFit="contain"
              />
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ViewBlog;
