import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Container from "../../components/Container";
import styles from "./demo.module.scss";
import BgShadow from "../../assets/images/bg-shadow.png";

function Demo() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    projectName: "",
    email: "",
    title: "",
    company: "",
    info: "",
  });
  const [submited, setSubmited] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // fetch("https://webflow.com/api/v1/form/6273ba6b55681ae927cb4388", {
    //   method: "POST",
    //   headers: {
    //     cookie:
    //       "wf_exp_uniqueId=bbd782c7-52c8-42cc-a84d-1c891f876ad9; wf_logout=1672587886137; wfsession=B5dffEF3IdIKHWLTRggAaA.0BmnEeg21bcayv2PeiSZSEgpaV68RSfqWO2y033f_3EzOyUXpqrc4g9XyYTPkeVSCraPIC7i56lGxxqOGzdvDQ.1672587886137.86400000.8e1G1pyGxZ6jAmrz5nOYC213ZZqqQaKczct_ZjYQ3kQ",
    //     Accept: "application/json, text/javascript, */*; q=0.01",
    //     "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    //     Connection: "keep-alive",
    //     "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    //     Origin: "https://www.sec3.dev",
    //     Referer: "https://www.sec3.dev/",
    //     "Sec-Fetch-Dest": "empty",
    //     "Sec-Fetch-Mode": "cors",
    //     "Sec-Fetch-Site": "cross-site",
    //     "User-Agent":
    //       "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Mobile Safari/537.36",
    //     "sec-ch-ua":
    //       '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
    //     "sec-ch-ua-mobile": "?1",
    //     "sec-ch-ua-platform": '"Android"',
    //   },
    //   body: JSON.stringify({
    //     name: "Full+Audit+Request",
    //     source: "https%3A%2F%2Fwww.sec3.dev%2Faudit%23audit",
    //     test: "false",
    //     "fields%5BFirst+Name%5D": state.firstName,
    //     "fields%5BLast+Name%5D": state.lastName,
    //     "fields%5BProject+Name%5D": state.projectName,
    //     "fields%5BEmail%5D": state.email,
    //     "fields%5BJob+Title%5D": state.title,
    //     "fields%5BCompany%5D": state.company,
    //     "fields%5BAdditional+Information%5D": state.info,
    //     dolphin: "false",
    //   }),
    // })
    //   .then((response) => {
    //     console.log(response);
    //     setSubmited(true);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  return (
    <div className={`${styles["demo"]} bg-footer`}>
      <Head>
        <title>Schedule a Demo | sec3 Auto Auditor Demo Call</title>
        <meta
          content="Please fill out the form below and a member of Sec3 team will get back to you soon."
          name="description"
        />
        <meta
          content="Schedule a Demo | sec3 Auto Auditor Demo Call"
          property="og:title"
        />
        <meta
          content="Please fill out the form below and a member of Sec3 team will get back to you soon."
          property="og:description"
        />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/63178530795d9bab7efc1663_Screen%20Shot%202022-09-06%20at%2012.34.21%20PM%20copy.png"
          property="og:image"
        />
        <meta
          content="Schedule a Demo | sec3 Auto Auditor Demo Call"
          property="twitter:title"
        />
        <meta
          content="Please fill out the form below and a member of Sec3 team will get back to you soon."
          property="twitter:description"
        />
        <meta
          content="https://uploads-ssl.webflow.com/6273ba6b55681ae927cb4388/63178530795d9bab7efc1663_Screen%20Shot%202022-09-06%20at%2012.34.21%20PM%20copy.png"
          property="twitter:image"
        />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Image
        className={styles["blur2-solution"]}
        src={BgShadow}
        loading="lazy"
        alt="bg-shadow"
      />

      <Container className={styles["titles"]}>
        <h1>sec3 X-ray / WatchTower Demo Call</h1>
        <p>
          Please fill out the form below and a member of sec3 team will get back
          to you soon.
        </p>
      </Container>

      {!submited ? (
        <Container className={styles["form"]}>
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
                  placeholder="Solana Project"
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
                  placeholder="johnny@youremail.so"
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
                  placeholder="Software Engineer"
                  required
                  value={state.title}
                  onChange={handleChange}
                />
              </div>

              <div className={styles["field"]}>
                <label htmlFor="complete-date">Company Name*</label>
                <input
                  type="text"
                  maxLength={256}
                  name="company"
                  placeholder="Your Company"
                  required
                  value={state.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles["flex-even"]}>
              <div className={styles["field"]}>
                <label htmlFor="contact">
                  Which Software you are interested for a demo
                </label>
                <input
                  type="text"
                  maxLength={256}
                  name="info"
                  placeholder="Watchtower"
                  required={false}
                  value={state.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles["submit"]}>
              <input
                type="submit"
                value="Submit"
                className={styles["submit-btn"]}
              />
            </div>
          </form>

          <p className={styles["note"]}>
            Note: sec3 may use the contact information you provide to us to
            contact you about our products and services. By clicking “submit”
            below you consent to receive such communications. You may
            unsubscribe from these communications at any time. For information
            on how to unsubscribe, as well as our privacy practices and
            commitment to protecting your privacy, please review our Privacy
            Policy.
          </p>
        </Container>
      ) : (
        <div className={styles["w-form-done"]}>
          Thank you! Your submission has been received!
        </div>
      )}
    </div>
  );
}

export default Demo;
