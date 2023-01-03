import React from "react";
import Head from "next/head";
import Image from "next/image";
import BtnWithArrow from "../../components/BtnWithArrow";
import Container from "../../components/Container";
import IconBadge from "../../components/IconBadge";
import styles from "./watchtower.module.scss";
import WatchTowerIllustration from "../../assets/images/watchtower-illustration.png";
import BgWatchTower from "../../assets/images/bg-watchtower.png";
import BgShadow from "../../assets/images/bg-shadow.png";

const WatchTower = () => {
  return (
    <div className={styles["watchtower"]}>
      <Head>
        <title>WatchTower | sec3 post-deployment security monitor</title>
        <meta
          content="WatchTower | sec3 post-deployment security monitor"
          property="og:title"
        />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/6317851cb18fa1f9a0e0a965_Screen%20Shot%202022-09-06%20at%2012.34.47%20PM%20copy.png"
          property="og:image"
        />
        <meta
          content="WatchTower | sec3 post-deployment security monitor"
          property="twitter:title"
        />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/6317851cb18fa1f9a0e0a965_Screen%20Shot%202022-09-06%20at%2012.34.47%20PM%20copy.png"
          property="twitter:image"
        />
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
          <h3>WatchTower Real-time Security Monitor</h3>
          <BtnWithArrow
            text="Schedule a Demo"
            url="/software-demo"
            className="m-t-2 full-width"
          />
        </div>

        <Image
          src={WatchTowerIllustration}
          loading="lazy"
          sizes="100vw"
          alt="watchTower-illustration"
          className={"m-t-2"}
        />
      </Container>

      <Container>
        <h5 className="description">
          Ever wonder if someone is hacking your main-net protocols at this
          moment? WatchTower detects and alerts suspicious activity in real-time
          to protect funds.
        </h5>
      </Container>

      <Container className="p-t-4 relative">
        <Image
          className={styles["blur2-solution-2"]}
          src={BgShadow}
          loading="lazy"
          alt="bg-shadow"
        />
        <h4 className="text-center smaller-width title">
          detect, prevent, & stop security attacks in real-time
        </h4>
        <p className="text-center subtitle">
          smart monitor for smart contracts
        </p>
        <div className="grid-3">
          <div className={`card-shadow ${styles["card-shadow"]}`}>
            <h6>Pro-active monitoring</h6>
          </div>
          <div className={`card-shadow ${styles["card-shadow"]}`}>
            <h6>Customized monitoring</h6>
          </div>
          <div className={`card-shadow ${styles["card-shadow"]}`}>
            <h6>Anomaly Monitoring</h6>
          </div>
        </div>
      </Container>

      <Container className="grid-2 p-t-4 relative">
        <Image
          className={styles["blur2-solution-3"]}
          src={BgShadow}
          loading="lazy"
          alt="bg-shadow"
        />
        <div>
          <IconBadge type="ball" />
          <h5 className="section-title title">
            A Selected List of Built-in Monitors
          </h5>
        </div>
        <div className={`p-l-4 grid-2 smaller-gap ${styles["small-gap"]}`}>
          <div>
            <IconBadge type="star" />
            <h6 className="blue-400-c">abnormal token transfers</h6>
          </div>
          <div>
            <IconBadge type="star" />
            <h6 className="blue-400-c">rug pulls</h6>
          </div>
          <div>
            <IconBadge type="star" />
            <h6 className="blue-400-c">flash loans</h6>
          </div>
          <div>
            <IconBadge type="star" />
            <h6 className="blue-400-c">fake input accounts</h6>
          </div>
          <div>
            <IconBadge type="star" />
            <h6 className="blue-400-c">round-trip trades</h6>
          </div>
          <div>
            <IconBadge type="star" />
            <h6 className="blue-400-c">cross-chain bridge attacks</h6>
          </div>
        </div>
      </Container>

      <div className="bg-footer">
        <Container className="flex-column flex-center">
          <div className="xs-small-width subtitle">
            <h4 className="text-center">
              secure your main-net protocol today!
            </h4>
          </div>
          <div className="m-t-2 flex-row">
            <div className="wrapper-navbar-buttom">
              <a
                className="secondary-button"
                href="https://docs.google.com/forms/d/e/1FAIpQLSf3_iL4Zx8fQScVKTCLPjxTJa79BQ5gqH3KyHHGrwniJrTsFw/viewform"
              >
                <div>Become WatchTower Pilot</div>
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WatchTower;
