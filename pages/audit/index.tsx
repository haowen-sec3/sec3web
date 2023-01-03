import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import BtnWithArrow from "../../components/BtnWithArrow";
import Container from "../../components/Container";
import IconBadge from "../../components/IconBadge";
import styles from "./audit.module.scss";
import AuditIllustration from "../../assets/images/audit-illustration.svg";
import BgAudit from "../../assets/images/bg-audit.png";
import BgShadow from "../../assets/images/bg-shadow.png";
import UXDLogo from "../../assets/images/uxd-logo.png";
import ParclLogo from "../../assets/images/parcl-logo.png";
import MeanLogo from "../../assets/images/mean-logo.png";
import MetaplexLogoGrid from "../../assets/images/metaplex-logo-audit.svg";
import HedgeLogoGrid from "../../assets/images/hedge-logo-audit.svg";
import MeanLogoGrid from "../../assets/images/mean-logo-audit.png";
import AmihanLogoGrid from "../../assets/images/amihan-logo-audit.svg";
import StarAtlasLogoGrid from "../../assets/images/star-atlas-logo-audit.png";
import DparclLogoGrid from "../../assets/images/dparcl-logo-audit.png";
import UXDLogoGrid from "../../assets/images/uxd-logo-audit.svg";
import InvariantLogoGrid from "../../assets/images/invariant-logo-audit.svg";

const Audit = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    projectName: "",
    email: "",
    title: "",
    date: "",
    country: "",
    contact: "",
    info: "",
  });
  const [submited, setSubmited] = useState(false);
  const getTwitterIcon = () => (
    <svg
      width="17"
      height="14"
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.36371 13.5008C11.4015 13.5008 14.7039 8.49859 14.7039 4.16067C14.7039 4.01859 14.7039 3.87715 14.6943 3.73635C15.3367 3.27166 15.8913 2.69628 16.332 2.03715C15.733 2.30275 15.0974 2.47686 14.4466 2.55363C15.1319 2.14343 15.6448 1.49815 15.8898 0.737952C15.2454 1.12036 14.5405 1.38984 13.8053 1.53475C13.3104 1.00847 12.6558 0.65998 11.9428 0.543209C11.2299 0.426437 10.4983 0.547895 9.86134 0.888788C9.22437 1.22968 8.71751 1.771 8.41919 2.42898C8.12087 3.08697 8.04773 3.82493 8.21107 4.52867C6.90596 4.4632 5.6292 4.12403 4.46367 3.53316C3.29813 2.94228 2.26987 2.11293 1.44563 1.09891C1.02585 1.82158 0.89728 2.67706 1.0861 3.49119C1.27492 4.30532 1.76693 5.01688 2.46195 5.48099C1.93952 5.46568 1.42846 5.32475 0.972031 5.07011V5.11171C0.972239 5.86961 1.2346 6.60411 1.71461 7.19062C2.19463 7.77714 2.86274 8.17956 3.60563 8.32963C3.12235 8.46146 2.61528 8.48072 2.12339 8.38595C2.33324 9.03817 2.74165 9.60851 3.29152 10.0172C3.8414 10.426 4.50525 10.6527 5.19027 10.6656C4.50966 11.2006 3.73024 11.5962 2.89661 11.8296C2.06299 12.0631 1.19151 12.1299 0.332031 12.0263C1.83325 12.9896 3.57998 13.5006 5.36371 13.4983"
        fill="#1DA1F2"
      ></path>
    </svg>
  );

  const scrollToAnchor = (anchorName: string) => {
    debugger;
    if (anchorName) {
      let anchorElement = document.getElementById(anchorName);
      if (anchorElement) {
        anchorElement.scrollIntoView({ block: "start", behavior: "smooth" });
      }
    }
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("https://webflow.com/api/v1/form/6273ba6b55681ae927cb4388", {
      method: "POST",
      headers: {
        cookie:
          "wf_exp_uniqueId=bbd782c7-52c8-42cc-a84d-1c891f876ad9; wf_logout=1672587886137; wfsession=B5dffEF3IdIKHWLTRggAaA.0BmnEeg21bcayv2PeiSZSEgpaV68RSfqWO2y033f_3EzOyUXpqrc4g9XyYTPkeVSCraPIC7i56lGxxqOGzdvDQ.1672587886137.86400000.8e1G1pyGxZ6jAmrz5nOYC213ZZqqQaKczct_ZjYQ3kQ",
        Accept: "application/json, text/javascript, */*; q=0.01",
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        Connection: "keep-alive",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        Origin: "https://www.sec3.dev",
        Referer: "https://www.sec3.dev/",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "cross-site",
        "User-Agent":
          "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36",
        "sec-ch-ua":
          '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
        "sec-ch-ua-mobile": "?1",
        "sec-ch-ua-platform": '"Android"',
      },
      body: {
        name: "Full+Audit+Request",
        source: "https%3A%2F%2Fwww.sec3.dev%2Faudit%23audit",
        test: "false",
        "fields%5BFirst+Name%5D": state.firstName,
        "fields%5BLast+Name%5D": state.lastName,
        "fields%5BProject+Name%5D": state.projectName,
        "fields%5BEmail%5D": state.email,
        "fields%5BJob+Title%5D": state.title,
        "fields%5BAudit+Complete+Date%5D": state.date,
        "fields%5BCountry%5D": state.country,
        "fields%5BAlt+Contact%5D": state.contact,
        "fields%5BAdditional+Information%5D": state.info,
        dolphin: "false",
      },
    })
      .then((response) => {
        console.log(response);
        setSubmited(true);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={styles["audit"]}>
      <Head>
        <title>Audit | Full Security Audits</title>
        <meta
          content="Full Security Audit for Solana smart contracts, deep and comprehensive, trusted by leading projects and protocols."
          name="description"
        />
        <meta content="Audit | Full Security Audits" property="og:title" />
        <meta
          content="Full Security Audit for Solana smart contracts, deep and comprehensive, trusted by leading projects and protocols."
          property="og:description"
        />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/6317851b4707fb1b154fb93c_Screen%20Shot%202022-09-06%20at%2012.34.31%20PM%20copy.png"
          property="og:image"
        />
        <meta content="Audit | Full Security Audits" property="twitter:title" />
        <meta
          content="Full Security Audit for Solana smart contracts, deep and comprehensive, trusted by leading projects and protocols."
          property="twitter:description"
        />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/6317851b4707fb1b154fb93c_Screen%20Shot%202022-09-06%20at%2012.34.31%20PM%20copy.png"
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Image
        className={styles["image-header-software"]}
        src={BgAudit}
        loading="lazy"
        alt=""
      />

      <Image
        className={styles["blur1-solution"]}
        src={BgShadow}
        loading="lazy"
        alt="bg-shadow"
      />

      <Container className="top-section">
        <div className={styles["title-col"]}>
          <IconBadge type="ball" />
          <h3>Launch Audit</h3>
          <p className="blue-400-c">
            prepare and certify your Solana, Aptos, Sui and ETH protocols for
            launch
          </p>
          <BtnWithArrow
            text="Book a Launch Audit"
            // url="#audit"
            className={`m-t-2 full-width`}
            target="_top"
            handleClick={() => scrollToAnchor("audit")}
          />
        </div>

        <Image
          src={AuditIllustration}
          loading="lazy"
          sizes="100vw"
          alt="audit-illustration"
        />
      </Container>

      <Container className="flex-column relative">
        <h4 className="text-center smaller-width ">Deep and Comprehensive</h4>

        <p className="text-center subtitle">
          we proudly position sec3 Launch Audit to go deep and comprehensive
        </p>

        <BtnWithArrow
          text="Sample Launch Audit Report 1"
          url="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/628b07305b8820cc04fba580_624a49f3a51dfbdbbf74ff09_Soteria%20UXD%20Audit%20Report%20Final.pdf"
          className="m-t-1 m-auto"
        />
        <BtnWithArrow
          text="Sample Launch Audit Report 2"
          url="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/632da310f10dfd7e822a5ce7_audit.pdf"
          className="m-t-1 m-auto"
        />

        <Image
          className={styles["blur2-solution"]}
          src={BgShadow}
          loading="lazy"
          sizes="(max-width: 479px) 80vw, (max-width: 767px) 82vw, (max-width: 991px) 75vw, 63vw"
          alt="bg-shadow"
        />
      </Container>

      <Container className="p-t-4 relative">
        <h4 className="text-center smaller-width ">Monthly Audit Package</h4>
        <p className="text-center subtitle">
          combined three services in one pacakge, designed for leading protocols
        </p>

        <div className="grid-3">
          <div className={`card-shadow ${styles["card-shadow"]}`}>
            <h6>Incremental Audit</h6>
            <ul role="list" className={styles.list}>
              <li className={styles["list-item-audit"]}>Lower audit cost</li>
              <li className={styles["list-item-audit"]}>
                Dedicated auditors familiar with your code base
              </li>
              <li className={styles["list-item-audit"]}>
                Timely audit on incremental changes
              </li>
              <li className={styles["list-item-audit"]}>
                Ensure nothing slipping into main-net protocol w/o proper audit
              </li>
            </ul>
          </div>
          <div className={`card-shadow ${styles["card-shadow"]}`}>
            <h6>X-ray</h6>
            <ul role="list" className={styles.list}>
              <li className={styles["list-item-audit"]}>
                Powerful software scans over 50 types of security
                vulnerabilities
              </li>
              <li className={styles["list-item-audit"]}>
                Integration with GitHub CI
              </li>
              <li className={styles["list-item-audit"]}>
                Catch issues at the time when they arise
              </li>
              <li className={styles["list-item-audit"]}>
                Alert emerging new threats
              </li>
            </ul>
          </div>
          <div className={`card-shadow ${styles["card-shadow"]}`}>
            <h6>On-call Audit</h6>
            <ul role="list" className={styles.list}>
              <li className={styles["list-item-audit"]}>
                Ad-hoc, unplanned audit services, provided by a top notch team
              </li>
              <li className={styles["list-item-audit"]}>
                Fast-track, reserved audit capacity guaranteed
              </li>
              <li className={styles["list-item-audit"]}>
                Never again let the lack of audit services to slow your project
                down
              </li>
            </ul>
          </div>
        </div>
        <Image
          className={styles["blur3-solution"]}
          src={BgShadow}
          loading="lazy"
          sizes="(max-width: 479px) 80vw, (max-width: 767px) 82vw, (max-width: 991px) 75vw, 63vw"
          alt="bg-shadow"
        />
      </Container>

      <Container className="relative">
        <h5 className="blue-400">From Our Customers</h5>
        <div className="grid-3">
          <div className={`card-shadow ${styles["card-shadow"]}`}>
            <div className={styles["flex-even"]}>
              <Image src={UXDLogo} loading="lazy" alt="uxd-Logo" />
              {getTwitterIcon()}
            </div>

            <h6>Kento Inami</h6>
            <h6 className="s blue-300-c">Founder, UXD Protocol</h6>

            <p className="xs">
              We had a great experience working with the Soteria team! The team
              works hard and executes 120% to deliver results. They are
              available and provide very valuable insight backed by clear proof
              and explanations. UXD could not be happier to work with Soteria,
              so much that we started a continuous collaboration to have them
              audit our code in the future.
            </p>
          </div>

          <div className={`card-shadow ${styles["card-shadow"]}`}>
            <div className={styles["flex-even"]}>
              <Image src={ParclLogo} loading="lazy" alt="uxd-Logo" />
              {getTwitterIcon()}
            </div>

            <h6>David Josephs</h6>
            <h6 className="s blue-300-c">Head of Blockchain, Parcl Protocol</h6>

            <p className="xs">
              SEC3 has been incredible to work with. Their scanning software
              eliminates classes of bugs and the team are true experts. They
              work extremely closely with projects in audit--working weekends
              and going the extra mile to create proof of concepts even just for
              educational purposes."
            </p>
          </div>

          <div className={`card-shadow ${styles["card-shadow"]}`}>
            <div className={styles["flex-even"]}>
              <Image src={MeanLogo} loading="lazy" alt="mean-Logo" />
              {getTwitterIcon()}
            </div>

            <h6>Michel Triana</h6>
            <h6 className="s blue-300-c">Founder, Mean DAO</h6>

            <p className="xs">
              Working with SEC3 has been amazing. Super responsive and top shelf
              security team. Besides auditing Mean DAO smart contracts and
              helping us with our security controls, we leverage their automatic
              code vulnerability scanner on a daily basis. An all-around great
              company and team to have by your side!
            </p>
          </div>
        </div>
        <Image
          className={styles["blur3-solution"]}
          src={BgShadow}
          loading="lazy"
          sizes="(max-width: 479px) 80vw, (max-width: 767px) 82vw, (max-width: 991px) 75vw, 63vw"
          alt="bg-shadow"
        />
      </Container>

      <Container>
        <h5 className="blue-400">Partial List of Launch Audit Customers</h5>

        <div className={styles["auditor-customer-grid"]}>
          <div>
            <Image src={MetaplexLogoGrid} loading="lazy" alt="metaplex-Logo" />
          </div>
          <div>
            <Image src={HedgeLogoGrid} loading="lazy" alt="hedge-Logo" />
          </div>
          <div>
            <Image src={MeanLogoGrid} loading="lazy" alt="mean-Logo" />
          </div>
          <div>
            <Image src={AmihanLogoGrid} loading="lazy" alt="amihan-Logo" />
          </div>
          <div>
            <Image src={StarAtlasLogoGrid} loading="lazy" alt="amihan-Logo" />
          </div>
          <div>
            <Image src={DparclLogoGrid} loading="lazy" alt="star-altlas-Logo" />
          </div>
          <div>
            <Image src={UXDLogoGrid} loading="lazy" alt="uxd-Logo" />
          </div>
          <div>
            <Image
              src={InvariantLogoGrid}
              loading="lazy"
              alt="invariant-Logo"
            />
          </div>
        </div>
      </Container>

      <Container>
        <div className={styles["form-container"]} id="audit">
          <h5>Request a sec3 security Launch Audit</h5>

          {!submited ? (
            <>
              <p>
                Please fill out the form below and a member of sec3 team will
                get back to you soon.
              </p>

              <form action="submit" onSubmit={handleSubmit}>
                <div className={styles["flex-even"]}>
                  <div className={styles["field"]}>
                    <label htmlFor="first-name">First Name*</label>
                    <input
                      type="text"
                      maxLength={256}
                      name="firstName"
                      placeholder="John"
                      required
                      value={state.firstName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles["field"]}>
                    <label htmlFor="last-name">Last Name*</label>
                    <input
                      type="text"
                      maxLength={256}
                      name="lastName"
                      placeholder="Dole"
                      required
                      value={state.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles["flex-even"]}>
                  <div className={styles["field"]}>
                    <label htmlFor="project-name">Project Name*</label>
                    <input
                      type="text"
                      maxLength={256}
                      name="projectName"
                      placeholder="Your Solana Project"
                      required
                      value={state.projectName}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles["field"]}>
                    <label htmlFor="email">Email*</label>
                    <input
                      type="email"
                      maxLength={256}
                      name="email"
                      placeholder="john@youremail.so"
                      required
                      value={state.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles["flex-even"]}>
                  <div className={styles["field"]}>
                    <label htmlFor="job-title">Job Title*</label>
                    <input
                      type="text"
                      maxLength={256}
                      name="title"
                      placeholder="CEO"
                      required
                      value={state.title}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles["field"]}>
                    <label htmlFor="complete-date">
                      Desired Audit Complete Date*
                    </label>
                    <input
                      type="text"
                      maxLength={256}
                      name="date"
                      placeholder="DD/MM/YYYY"
                      required
                      value={state.date}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles["flex-even"]}>
                  <div className={styles["field"]}>
                    <label htmlFor="country">Country</label>
                    <input
                      type="text"
                      maxLength={256}
                      name="country"
                      placeholder="United States"
                      required={false}
                      value={state.country}
                      onChange={handleChange}
                    />
                  </div>

                  <div className={styles["field"]}>
                    <label htmlFor="contact">Alternative Contact</label>
                    <input
                      type="text"
                      maxLength={256}
                      name="contact"
                      placeholder="Telegram"
                      required={false}
                      value={state.contact}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles["textarea"]}>
                  <label htmlFor="contact">Additional Information</label>
                  <textarea
                    name="info"
                    id="info"
                    cols={30}
                    rows={5}
                    maxLength={5000}
                    placeholder="Please tell us more about your project. "
                  ></textarea>
                </div>

                <div className={styles["submit"]}>
                  <input
                    type="submit"
                    value="Submit"
                    className={styles["submit-btn"]}
                  />
                </div>
              </form>
            </>
          ) : (
            <div className={styles["w-form-done"]}>
              Thank you! Your submission has been received!
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Audit;
