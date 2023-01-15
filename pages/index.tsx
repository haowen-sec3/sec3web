import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "../components/Container";
import IconBadge from "../components/IconBadge";
import BtnWithArrow from "../components/BtnWithArrow";
import styles from "./home.module.scss";
import HomeIllustration from "../assets/images/home-illustration.svg";
import MetaplexLogo from "../assets/images/metaplex-logo.png";
import StarAtlasLogo from "../assets/images/star-atlas-logo.png";
import SaberLogo from "../assets/images/saber-logo.png";
import JupitorLogo from "../assets/images/jupitor-logo.png";
import ZetaLogo from "../assets/images/zeta-logo.png";
import TulipLogo from "../assets/images/tulip-logo.png";
import BgShadow from "../assets/images/bg-shadow.png";
import MultiCapital from "../assets/images/multi-capital.png";
import AndSvg from "../assets/images/&.svg";
import Investor1 from "../assets/images/investor1.png";
import Investor2 from "../assets/images/investor2.png";
import Investor3 from "../assets/images/investor3.png";
import Investor4 from "../assets/images/investor4.png";
import Investor5 from "../assets/images/investor5.png";

export default function Home() {
  return (
    <div className={styles.home}>
      <Head>
        <title>Blockchain Security Software and Audit</title>
        <meta
          content="Security is front and center for Web3 projects.  sec3 is building scalable software tools and provides launch audit services to secure Solana applications."
          name="description"
        />
        <meta
          content="Blockchain Security Software and Audit"
          property="og:title"
        />
        <meta
          content="Security is front and center for Web3 projects.  sec3 is building scalable software tools and provides launch audit services to secure Solana applications."
          property="og:description"
        />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/63178530795d9bab7efc1663_Screen%20Shot%202022-09-06%20at%2012.34.21%20PM%20copy.png"
          property="og:image"
        />
        <meta
          content="Blockchain Security Software and Audit"
          property="twitter:title"
        />
        <meta
          content="Security is front and center for Web3 projects.  sec3 is building scalable software tools and provides launch audit services to secure Solana applications."
          property="twitter:description"
        />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/63178530795d9bab7efc1663_Screen%20Shot%202022-09-06%20at%2012.34.21%20PM%20copy.png"
          property="twitter:image"
        />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles["bg-home"]}>
        <Container className={`top-section`}>
          <div className={styles["title-col"]}>
            <h3>End-to-End Web3 Security</h3>
            <p className="m-t-4">
              sec3<sup>TM</sup> is a security research firm that prepares web3
              protocols for millions of users, by building technology based
              solutions for Web3 projects to ensure protocols stay safe as they
              scale.
            </p>
          </div>

          <Image
            src={HomeIllustration}
            loading="lazy"
            sizes="100vw"
            alt="audit-illustration"
          />
        </Container>

        <Container>
          <h5 className="blue-400">
            Trusted by Leading Protocols and Projects
          </h5>
          <div className={styles["logo-wrapper"]}>
            <Image src={MetaplexLogo} loading="lazy" alt="metaplex-Logo" />
            <Image src={StarAtlasLogo} loading="lazy" alt="star-atlas-Logo" />
            <Image src={SaberLogo} loading="lazy" alt="saber-Logo" />
            <Image src={JupitorLogo} loading="lazy" alt="jupitor-Logo" />
            <Image src={ZetaLogo} loading="lazy" alt="zeta-Logo" />
            <Image src={TulipLogo} loading="lazy" alt="tulip-Logo" />
          </div>
        </Container>
      </div>

      <Container className={`relative ${styles["solutions"]}`}>
        <h5 className="blue-400">sec3 Solutions</h5>
        <Image
          className="blur2-solution"
          src={BgShadow}
          loading="lazy"
          sizes="(max-width: 767px) 90vw, (max-width: 991px) 87vw, 90vw"
          alt="bg-shadow"
        />
        <div className="grid-3">
          <div className={styles["block-solution"]}>
            <div>
              <div className={styles["number-block-solution"]}>
                <IconBadge type="star" />
                <h6>/</h6>
                <h6>01</h6>
              </div>
              <div className={styles["text-block-solution"]}>
                <h5>Launch Audit</h5>
                <p>
                  Rigorous, researcher-led code examination to prepare and
                  certify Solana, Aptos, Sui, and ETH projects for launch.
                </p>
              </div>
            </div>
            <BtnWithArrow text="Learn more" url="/audit" className="m-t-2" />
          </div>

          <div className={styles["block-solution"]}>
            <div>
              <div className={styles["number-block-solution"]}>
                <IconBadge type="star" />
                <h6>/</h6>
                <h6>02</h6>
              </div>
              <div className={styles["text-block-solution"]}>
                <h5>X-ray Scanner</h5>
                <p>
                  Continuous code integration solution focus on security, ensure
                  ongoing code security.
                </p>
              </div>
            </div>
            <BtnWithArrow text="Learn more" url="/x-ray" className="m-t-2" />
          </div>

          <div className={styles["block-solution"]}>
            <div>
              <div className={styles["number-block-solution"]}>
                <IconBadge type="star" />
                <h6>/</h6>
                <h6>03</h6>
              </div>
              <div className={styles["text-block-solution"]}>
                <h5>WatchTower Monitor</h5>
                <p>
                  Post deployment real-time monitoring solution, alerts hacks
                  and ensure funds stay safe.
                </p>
              </div>
            </div>
            <BtnWithArrow
              text="Learn more"
              url="/watchtower"
              className="m-t-2"
            />
          </div>
        </div>
      </Container>

      <div className="bg-footer">
        <Container className={styles["investors"]}>
          <h5 className="blue-400 text-center">Our Investors</h5>
          <Image
            src={MultiCapital}
            loading="lazy"
            alt="investors"
            className={styles["multi-capital"]}
          />

          <Image
            src={AndSvg}
            loading="lazy"
            alt="and"
            className={styles["multi-capital"]}
          />

          <div className={styles["logo-wrapper-investor"]}>
            <Link href="#">
              <Image
                src={Investor1}
                loading="lazy"
                alt="Investor1"
                className={styles["investor-logo"]}
              />
            </Link>
            <Link href="#">
              <Image
                src={Investor2}
                loading="lazy"
                alt="Investor2"
                className={styles["investor-logo"]}
              />
            </Link>
            <Link href="#">
              <Image
                src={Investor3}
                loading="lazy"
                alt="Investor3"
                className={styles["investor-logo"]}
              />
            </Link>
            <Link href="#">
              <Image
                src={Investor4}
                loading="lazy"
                alt="Investor4"
                className={styles["investor-logo"]}
              />
            </Link>
            <Link href="#">
              <Image
                src={Investor5}
                loading="lazy"
                alt="Investor5"
                className={styles["investor-logo"]}
              />
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
}
