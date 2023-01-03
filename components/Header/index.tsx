import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.scss";
import Sec3Logo from "../../assets/images/sec3-logo.svg";

const Header = () => {
  const [expandNav, setExpandNavState] = useState(false);

  return (
    <div className={styles["header"]}>
      <div className={styles["container"]}>
        <Link className={styles["brand"]} href="/">
          <Image src={Sec3Logo} alt="sec3-logo" loading="lazy" />
        </Link>

        <nav role="navigation" className={styles["nav-menu"]}>
          <Link href="/audit" className={styles["navlink"]}>
            Launch Audit
          </Link>
          <Link href="/x-ray" className={styles["navlink"]}>
            X-ray
          </Link>
          <Link href="/watchtower" className={styles["navlink"]}>
            WatchTower
          </Link>
          <Link href="/blog" className={styles["navlink"]}>
            Blog
          </Link>
          <div className={styles["wrapper-navbar-buttom"]}>
            <Link
              href="https://pro.sec3.dev/login"
              target="_blank"
              className={styles["outline-button"]}
            >
              <div className={styles["button"]}>
                <div>Login</div>
              </div>
            </Link>
            <Link
              href="https://pro.sec3.dev"
              target="_blank"
              className={styles["outline-button2"]}
            >
              <div className={styles["button"]}>Sign up</div>
              <div className={styles["bg-button"]}></div>
              <div className={styles["bg-button2"]}></div>
            </Link>
          </div>
        </nav>

        <div
          className={styles["nav-button"]}
          onClick={() => setExpandNavState((prevState) => !prevState)}
        >
          <div className={styles["w-icon-nav-menu"]}>
            <svg
              className={styles["icon"]}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="4694"
              width="20"
              height="20"
            >
              <path
                d="M362.474498 627.133204M73.591065 278.392498c-29.520337 0-53.537334-24.016996-53.537334-53.53631 0-29.520337 24.016996-53.537334 53.537334-53.537334l876.816846 0c29.521361 0 53.537334 24.016996 53.537334 53.537334 0 29.519314-24.015973 53.53631-53.537334 53.53631L73.591065 278.392498zM73.591065 592.350003c-29.520337 0-53.537334-24.01802-53.537334-53.541427 0-29.520337 24.016996-53.537334 53.537334-53.537334l876.816846 0c29.521361 0 53.537334 24.016996 53.537334 53.537334 0 29.523407-24.015973 53.541427-53.537334 53.541427L73.591065 592.350003zM73.591065 903.797337c-29.520337 0-53.537334-24.015973-53.537334-53.537334 0-29.521361 24.016996-53.537334 53.537334-53.537334l876.816846 0c29.521361 0 53.537334 24.015973 53.537334 53.537334 0 29.521361-24.015973 53.537334-53.537334 53.537334L73.591065 903.797337z"
                fill="#ffffff"
                p-id="4695"
              ></path>
            </svg>
          </div>
        </div>
        {expandNav && (
          <div
            className={styles["nav-overlay"]}
            onClick={() => setExpandNavState(false)}
          >
            <nav className={styles["nav-menu"]}>
              <Link href="/audit" className={styles["navlink"]}>
                Launch Audit
              </Link>
              <Link href="/x-ray" className={styles["navlink"]}>
                X-ray
              </Link>
              <Link href="/watchtower" className={styles["navlink"]}>
                WatchTower
              </Link>
              <Link href="/blog" className={styles["navlink"]}>
                Blog
              </Link>
              <div className={styles["wrapper-navbar-buttom"]}>
                <Link
                  href="https://pro.sec3.dev/login"
                  target="_blank"
                  className={styles["outline-button"]}
                >
                  <div className={styles["button"]}>
                    <div>Login</div>
                  </div>
                </Link>
                <Link
                  href="https://pro.sec3.dev"
                  target="_blank"
                  className={styles["outline-button2"]}
                >
                  <div className={styles["button"]}>Sign up</div>
                  <div className={styles["bg-button"]}></div>
                  <div className={styles["bg-button2"]}></div>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
