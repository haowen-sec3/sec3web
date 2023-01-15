import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import BtnWithArrow from "../../components/BtnWithArrow";
import Container from "../../components/Container";
import IconBadge from "../../components/IconBadge";
import XRaySVG from "../../components/XRaySVG";
import styles from "./x-ray.module.scss";
import BgWatchTower from "../../assets/images/bg-watchtower.png";
import BgShadow from "../../assets/images/bg-shadow.png";
import XrayIcon1 from "../../assets/images/xray-icon-1.svg";
import XrayIcon2 from "../../assets/images/xray-icon-2.svg";
import XrayIcon3 from "../../assets/images/xray-icon-3.svg";
import XrayIcon4 from "../../assets/images/xray-icon-4.svg";
import XrayIcon5 from "../../assets/images/xray-icon-5.svg";
import XrayIcon6 from "../../assets/images/xray-icon-6.svg";
import { useState } from "react";

const XRay = () => {
  const [expand, setExpand] = useState<boolean[]>([false, false, false, false]);
  const getPlusIcon = () => {
    return (
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100%",
            height: "100%",
            transform: "translate3d(0px, 0px, 0px);",
          }}
        >
          <defs>
            <clipPath id="__lottie_element_5">
              <rect width="32" height="32" x="0" y="0"></rect>
            </clipPath>
          </defs>
          <g clipPath="url(#__lottie_element_5)">
            <g
              transform="matrix(1,0,0,1,16.125,14.875)"
              opacity="1"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(255,0,0)"
                  fillOpacity="1"
                  d=" M-11,1.125 C-11,1.125 10.75,1.125 10.75,1.125"
                ></path>
                <path
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(98,123,210)"
                  stroke-opacity="1"
                  strokeWidth="2"
                  d=" M-11,1.125 C-11,1.125 10.75,1.125 10.75,1.125"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(0.00000540256087333546,1,-1,0.00000540256087333546,17.125,16.1249942779541)"
              opacity="1"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(255,0,0)"
                  fillOpacity="1"
                  d=" M-11,1.125 C-11,1.125 10.75,1.125 10.75,1.125"
                ></path>
                <path
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(98,123,210)"
                  stroke-opacity="1"
                  strokeWidth="2"
                  d=" M-11,1.125 C-11,1.125 10.75,1.125 10.75,1.125"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  };
  const getMinusIcon = () => {
    return (
      <div className={styles["minus"]}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="32"
          height="32"
          preserveAspectRatio="xMidYMid meet"
          style={{
            width: "100%",
            height: "100%",
            transform: "translate3d(0px, 0px, 0px)",
          }}
        >
          <defs>
            <clipPath id="__lottie_element_5">
              <rect width="32" height="32" x="0" y="0"></rect>
            </clipPath>
          </defs>
          <g clipPath="url(#__lottie_element_5)">
            <g
              transform="matrix(1,0,0,1,16.125,14.875)"
              opacity="1"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(255,0,0)"
                  fillOpacity="1"
                  d=" M-11,1.125 C-11,1.125 10.75,1.125 10.75,1.125"
                ></path>
                <path
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(98,123,210)"
                  stroke-opacity="1"
                  strokeWidth="2"
                  d=" M-11,1.125 C-11,1.125 10.75,1.125 10.75,1.125"
                ></path>
              </g>
            </g>
            <g
              transform="matrix(1,0.00009457867417950183,-0.00009457867417950183,1,16.125106811523438,14.875011444091797)"
              opacity="1"
              style={{ display: "block" }}
            >
              <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                <path
                  fill="rgb(255,0,0)"
                  fillOpacity="1"
                  d=" M-11,1.125 C-11,1.125 10.75,1.125 10.75,1.125"
                ></path>
                <path
                  strokeLinecap="butt"
                  strokeLinejoin="miter"
                  fillOpacity="0"
                  strokeMiterlimit="4"
                  stroke="rgb(98,123,210)"
                  stroke-opacity="1"
                  strokeWidth="2"
                  d=" M-11,1.125 C-11,1.125 10.75,1.125 10.75,1.125"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    );
  };
  return (
    <div className={styles["x-ray"]}>
      <Head>
        <title>Automatic Audit Platform for Solana Smart Contract</title>
        <meta
          content="Developed by leading minds in program analysis, sec3 Auto Auditor automatically scans for security vulnerabilities in Solana smart contracts."
          name="description"
        />
        <meta
          content="Automatic Audit Platform for Solana Smart Contract"
          property="og:title"
        />
        <meta
          content="Developed by leading minds in program analysis, sec3 Auto Auditor automatically scans for security vulnerabilities in Solana smart contracts."
          property="og:description"
        />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/6317852f40d7361f8563cb91_Screen%20Shot%202022-09-06%20at%2012.34.40%20PM%20copy.png"
          property="og:image"
        />
        <meta
          content="Automatic Audit Platform for Solana Smart Contract"
          property="twitter:title"
        />
        <meta
          content="Developed by leading minds in program analysis, sec3 Auto Auditor automatically scans for security vulnerabilities in Solana smart contracts."
          property="twitter:description"
        />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/6317852f40d7361f8563cb91_Screen%20Shot%202022-09-06%20at%2012.34.40%20PM%20copy.png"
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Image
        src={BgWatchTower}
        loading="lazy"
        sizes="100vw"
        alt="bg-watchTower"
        className={styles["bg-watchtower"]}
      />

      <Image
        className={styles["blur2-solution"]}
        src={BgShadow}
        loading="lazy"
        alt="bg-shadow"
      />

      <Container className="top-section">
        <div className={styles["title-col"]}>
          <IconBadge type="ball" />
          <h3>X-ray Security Scanner</h3>
          <BtnWithArrow
            text="Schedule a Demo"
            url="/software-demo"
            className="m-t-2 full-width"
          />
        </div>

        {XRaySVG()}
      </Container>

      <Container>
        <h5 className="description2">
          X-ray scanner software provides a continuous integration solution
          focused on security. It scans for security vulnerabilities in Solana
          smart contracts to ensure code are checked for security at the time of
          being created.
        </h5>
      </Container>

      <Container className="grid-2 p-t-4 relative">
        <Image
          className={styles["blur2-solution-2"]}
          src={BgShadow}
          loading="lazy"
          alt="bg-shadow"
        />
        <div>
          <IconBadge type="ball" />
          <h5 className="section-title title">A Tech-based Solution</h5>
        </div>
        <div className={`p-l-4 grid-2 smaller-gap ${styles["small-gap"]}`}>
          <div>
            <Image
              src={XrayIcon1}
              loading="lazy"
              sizes="100vw"
              alt="XrayIcon1"
            />
            <h6 className="blue-400-c">Powerful Technology & Algorithms</h6>
            <p className="s regular">
              Convert source code into a form that can be analyzed, and apply
              sophisticated algorithms.
            </p>
          </div>
          <div>
            <Image
              src={XrayIcon2}
              loading="lazy"
              sizes="100vw"
              alt="XrayIcon2"
            />
            <h6 className="blue-400-c">
              Reduce Security Risk & Cost / Time to Market
            </h6>
            <p className="s regular">
              Push security left into the development phase.
            </p>
          </div>
          <div>
            <Image
              src={XrayIcon3}
              loading="lazy"
              sizes="100vw"
              alt="XrayIcon3"
            />
            <h6 className="blue-400-c">Continueingly Expanding Coverage</h6>
            <p className="s regular">
              Keep adding new vulnerability signatures leveraging sec3 audit
              practice and other sources.
            </p>
          </div>
          <div>
            <Image
              src={XrayIcon4}
              loading="lazy"
              sizes="100vw"
              alt="XrayIcon4"
            />
            <h6 className="blue-400-c">Consistent, Scalable, Fast & 24/7</h6>
            <p className="s regular">
              Avoid costly mistakes. Let our software do the heavy lifting so
              you can focus on innovating.
            </p>
          </div>
          <div>
            <Image
              src={XrayIcon5}
              loading="lazy"
              sizes="100vw"
              alt="XrayIcon5"
            />
            <h6 className="blue-400-c">Software as a Service</h6>
            <p className="s regular">Easy to use and no setup needed.</p>
          </div>
          <div>
            <Image
              src={XrayIcon6}
              loading="lazy"
              sizes="100vw"
              alt="XrayIcon6"
            />
            <h6 className="blue-400-c">CI Integration Available</h6>
            <p className="s regular">
              Fully integrated with the Github development process.
            </p>
          </div>
        </div>
      </Container>

      <div className="bg-footer">
        <Container className={styles["pricing-table"]}>
          <div className={styles["pricing"]}>
            <div className={styles["ems"]}>
              <div></div>
              <h6 className="blue-300-c">Pricing structure</h6>
            </div>
            <div className={styles["ems"]}>
              <h6>Free</h6>
              <p className={styles["regular"]}>$0</p>
              <div className={styles["wrapper-button"]}>
                <Link href="https://pro.sec3.dev/" className={styles["link"]}>
                  <div className={styles["button"]}>
                    <div>Get Started</div>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 8H13.5"
                        stroke="currentcolor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9 3.5L13.5 8L9 12.5"
                        stroke="currentcolor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles["ems"]}>
              <h6>Build</h6>
              <p className={styles["regular"]}>
                $19,999/Yea
                <br />
                $1,999/Month
              </p>
              <div className={styles["wrapper-button"]}>
                <Link href="https://pro.sec3.dev/" className={styles["link2"]}>
                  <div className={styles["button"]}>
                    <div>Get Started</div>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 8H13.5"
                        stroke="currentcolor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9 3.5L13.5 8L9 12.5"
                        stroke="currentcolor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles["ems"]}>
              <h6>Scale</h6>
              <p className={styles["regular"]}>
                $99,999/Year
                <br />
                $9,999/Month
              </p>
              <div className={styles["wrapper-button"]}>
                <Link href="https://pro.sec3.dev/" className={styles["link"]}>
                  <div className={styles["button"]}>
                    <div>Buy plan</div>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 8H13.5"
                        stroke="currentcolor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9 3.5L13.5 8L9 12.5"
                        stroke="currentcolor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
            <div className={styles["ems"]}>
              <h6>Enterprise</h6>
              <p className={styles["regular"]}>
                Audit +<br />
                Software
              </p>
              <div className={styles["wrapper-button"]}>
                <Link href="https://pro.sec3.dev/" className={styles["link"]}>
                  <div className={styles["button"]}>
                    <div>Contact Us</div>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 8H13.5"
                        stroke="currentcolor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M9 3.5L13.5 8L9 12.5"
                        stroke="currentcolor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={styles["pricing"]}>
            <div
              className={`${styles["block-pricing-structure"]} ${styles["round-top-left"]}`}
            >
              <p className="blue-400-c">Coverage</p>
            </div>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">10+ Vulnerabilities</p>
            </div>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">Full Coverage &gt;50 Vulnerabilities</p>
            </div>
            <div
              className={`${styles["block-pricing-structure"]} ${styles["round-top-right"]}`}
            >
              <p className="blue-400-c">Full Coverage &gt;50 Vulnerabilities</p>
            </div>
            <div
              className={`${styles["block-pricing-structure"]} ${styles["enterprise-block-pricing-structure"]} ${styles["round-top-enterprise-block-pricing-structure"]}`}
            >
              <p className="blue-400-c">Full Coverage & Incremental Audit</p>
            </div>
          </div>

          <div className={styles["pricing"]}>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">Number Of Scans</p>
            </div>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">10 per month</p>
            </div>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">100 per month</p>
            </div>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">1,000 per month</p>
            </div>
            <div
              className={`${styles["block-pricing-structure"]} ${styles["enterprise-block-pricing-structure"]}`}
            >
              <p className="blue-400-c">Unlimited &nbsp;∞</p>
            </div>
          </div>

          <div className={styles["pricing"]}>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">Audit Certificates</p>
            </div>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">Available for purchase</p>
            </div>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">100</p>
            </div>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">1,000</p>
            </div>
            <div
              className={`${styles["block-pricing-structure"]} ${styles["enterprise-block-pricing-structure"]}`}
            >
              <p className="blue-400-c">Unlimited &nbsp;∞</p>
            </div>
          </div>

          <div className={styles["pricing"]}>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">Dashboard</p>
            </div>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">Yes</p>
            </div>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">Yes</p>
            </div>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">Yes</p>
            </div>
            <div
              className={`${styles["block-pricing-structure"]} ${styles["enterprise-block-pricing-structure"]} `}
            >
              <p className="blue-400-c">Yes</p>
            </div>
          </div>

          <div className={styles["pricing"]}>
            <div
              className={`${styles["block-pricing-structure"]} ${styles["round-bottom-left"]}`}
            >
              <p className="blue-400-c">Github Action</p>
            </div>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">-</p>
            </div>
            <div className={styles["block-pricing-structure"]}>
              <p className="blue-400-c">Yes</p>
            </div>
            <div
              className={`${styles["block-pricing-structure"]} ${styles["round-bottom-right"]}`}
            >
              <p className="blue-400-c">Yes</p>
            </div>
            <div
              className={`${styles["block-pricing-structure"]} ${styles["enterprise-block-pricing-structure"]} ${styles["round-bottom-enterprise-block-pricing-structure"]}`}
            >
              <p className="blue-400-c">Yes</p>
            </div>
          </div>
        </Container>

        <Container className={styles["pricing-table-hidden"]}>
          <div className={styles["title"]}>
            <h5 className="blue-300-c">Pricing structure</h5>
          </div>

          <div className={styles["pricing-container"]}>
            <div className={styles["w-dropdown"]}>
              <div className={styles["top"]}>
                <div
                  className={styles["type"]}
                  onClick={() =>
                    setExpand((prevState) => {
                      const newArr = [false, false, false, false];
                      newArr[0] = !prevState[0];
                      return newArr;
                    })
                  }
                >
                  <h6>Free</h6>
                  <>{expand[0] ? getMinusIcon() : getPlusIcon()}</>
                </div>
                <div className={styles["pricing"]}>
                  <p>$0</p>
                </div>
                <div className={styles["wrapper-button"]}>
                  <Link href="https://pro.sec3.dev/" className={styles["link"]}>
                    <div className={styles["button"]}>
                      <div>Get Started</div>
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 8H13.5"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M9 3.5L13.5 8L9 12.5"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles["grid-2"]} ${
                    expand[0] ? styles["expand"] : ""
                  }`}
                >
                  <div className={styles["left"]}>
                    <div>
                      <p className="xs medium blue-400-c">Coverage</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Number Of Scans</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">
                        Number Of Certificates
                      </p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">
                        Number Of Max Scans
                      </p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Support Response</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Dashboard</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Github Action</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Beta Features</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">
                        New Signature Alerts
                      </p>
                    </div>
                  </div>
                  <div className={styles["right"]}>
                    <div>
                      <p className="xs medium blue-400-c">10+ SVEs</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">10 / month</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">-</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">-</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">-</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Yes</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">-</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">-</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">-</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["pricing-container"]}>
            <div className={styles["w-dropdown"]}>
              <div className={styles["top"]}>
                <div
                  className={styles["type"]}
                  onClick={() =>
                    setExpand((prevState) => {
                      const newArr = [false, false, false, false];
                      newArr[1] = !prevState[1];
                      return newArr;
                    })
                  }
                >
                  <h6>Build</h6>
                  <>{expand[1] ? getMinusIcon() : getPlusIcon()}</>
                </div>
                <div className={styles["pricing"]}>
                  <p>$19,999/Year</p>
                </div>
                <div className={styles["wrapper-button"]}>
                  <Link
                    href="https://pro.sec3.dev/"
                    className={styles["link2"]}
                  >
                    <div className={styles["button"]}>
                      <div>Get Started</div>
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 8H13.5"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M9 3.5L13.5 8L9 12.5"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles["grid-2"]} ${
                    expand[1] ? styles["expand"] : ""
                  }`}
                >
                  <div className={styles["left"]}>
                    <div>
                      <p className="xs medium blue-400-c">Coverage</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Number Of Scans</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">
                        Number Of Certificates
                      </p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">
                        Number Of Max Scans
                      </p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Support Response</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Dashboard</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Github Action</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Beta Features</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">
                        New Signature Alerts
                      </p>
                    </div>
                  </div>
                  <div className={styles["right"]}>
                    <div>
                      <p className="xs medium blue-400-c">40+ SVEs</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">1,000 / mo</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">100</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">-</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Within 24h</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Yes</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Yes</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Yes</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Yes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["pricing-container"]}>
            <div className={styles["w-dropdown"]}>
              <div className={styles["top"]}>
                <div
                  className={styles["type"]}
                  onClick={() =>
                    setExpand((prevState) => {
                      const newArr = [false, false, false, false];
                      newArr[2] = !prevState[2];
                      return newArr;
                    })
                  }
                >
                  <h6>Scale</h6>
                  <>{expand[2] ? getMinusIcon() : getPlusIcon()}</>
                </div>
                <div className={styles["pricing"]}>
                  <p>$99,999/Year</p>
                </div>
                <div className={styles["wrapper-button"]}>
                  <Link href="https://pro.sec3.dev/" className={styles["link"]}>
                    <div className={styles["button"]}>
                      <div>Buy this plan</div>
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 8H13.5"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M9 3.5L13.5 8L9 12.5"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles["grid-2"]} ${
                    expand[2] ? styles["expand"] : ""
                  }`}
                >
                  <div className={styles["left"]}>
                    <div>
                      <p className="xs medium blue-400-c">Coverage</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Number Of Scans</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">
                        Number Of Certificates
                      </p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">
                        Number Of Max Scans
                      </p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Support Response</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Dashboard</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Github Action</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Beta Features</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">
                        New Signature Alerts
                      </p>
                    </div>
                  </div>
                  <div className={styles["right"]}>
                    <div>
                      <p className="xs medium blue-400-c">40+ SVEs</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">10,000 / mo</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">1,000</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">-</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Within 12h</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Yes</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Yes</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Yes</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Yes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles["pricing-container"]}>
            <div className={styles["w-dropdown"]}>
              <div className={styles["top"]}>
                <div
                  className={styles["type"]}
                  onClick={() =>
                    setExpand((prevState) => {
                      const newArr = [false, false, false, false];
                      newArr[3] = !prevState[3];
                      return newArr;
                    })
                  }
                >
                  <h6>Enterprise</h6>
                  <>{expand[3] ? getMinusIcon() : getPlusIcon()}</>
                </div>
                <div className={styles["pricing"]}>
                  <p>Let's talk</p>
                </div>
                <div className={styles["wrapper-button"]}>
                  <Link href="https://pro.sec3.dev/" className={styles["link"]}>
                    <div className={styles["button"]}>
                      <div>Contact us</div>
                      <svg
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 8H13.5"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M9 3.5L13.5 8L9 12.5"
                          stroke="currentcolor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </div>
                <div
                  className={`${styles["grid-2"]} ${
                    expand[3] ? styles["expand"] : ""
                  }`}
                >
                  <div className={styles["left"]}>
                    <div>
                      <p className="xs medium blue-400-c">Coverage</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Number Of Scans</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">
                        Number Of Certificates
                      </p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">
                        Number Of Max Scans
                      </p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Support Response</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Dashboard</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Github Action</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Beta Features</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">
                        New Signature Alerts
                      </p>
                    </div>
                  </div>
                  <div className={`${styles["right"]} ${styles["last"]} `}>
                    <div>
                      <p className="xs medium blue-400-c">Custom</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Unlimited</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Unlimited</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">-</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Streamlining</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Yes</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Yes</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Yes</p>
                    </div>
                    <div>
                      <p className="xs medium blue-400-c">Yes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <Container className="flex-column flex-center">
          <div className="xs-small-width subtitle">
            <h4 className="text-center title">
              secure your Solana project today!
            </h4>
          </div>
          <div className="m-t-2 p-b-2 flex-row">
            <div className="wrapper-navbar-buttom">
              <a className="secondary-button" href="https://pro.sec3.dev/">
                <div>Try X-Ray Free!</div>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default XRay;
