import React from "react";
import Image from "next/image";
import styles from "./footer.module.scss";
import Sec3Logo from "../../assets/images/sec3-logo.svg";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles["footer"]}>
      <div className={styles["container"]}>
        <div className={styles["flex-even"]}>
          <div className={styles["footer-left"]}>
            <Image
              src={Sec3Logo}
              alt="sec3-logo"
              loading="lazy"
              className={styles["logo"]}
            />
            <p className={styles["print"]}>Sec3 ©2022 All Rights Reserved.</p>
            <div className={styles["links"]}>
              <Link href="/terms" className={styles["terms"]}>
                Terms
              </Link>
              <Link href="/privacy-policy" className={styles["privacy-policy"]}>
                Privacy Policy
              </Link>
            </div>
          </div>
          <div className={styles["footer-right"]}>
            <Link
              href="https://twitter.com/Sec3dev"
              className={styles["social-media"]}
              target="_blank"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                  fill="currentcolor"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.5208 13.0066L15.5544 13.5602L14.9948 13.4924C12.9579 13.2325 11.1784 12.3512 9.66756 10.8711L8.92891 10.1367L8.73865 10.679C8.33575 11.888 8.59316 13.1647 9.43253 14.0234C9.8802 14.498 9.77948 14.5658 9.00725 14.2833C8.73865 14.1929 8.50363 14.1251 8.48124 14.159C8.4029 14.2381 8.6715 15.2663 8.88414 15.6731C9.17513 16.238 9.76828 16.7916 10.4174 17.1193L10.9658 17.3792L10.3167 17.3905C9.68994 17.3905 9.66756 17.4018 9.73471 17.639C9.95854 18.3734 10.8427 19.1531 11.8276 19.492L12.5214 19.7293L11.9171 20.0908C11.0218 20.6106 9.96973 20.9044 8.91772 20.9269C8.41409 20.9382 8 20.9834 8 21.0173C8 21.1303 9.36538 21.7631 10.16 22.0116C12.5438 22.746 15.3753 22.4297 17.5017 21.1755C19.0126 20.2829 20.5235 18.509 21.2286 16.7916C21.6091 15.8764 21.9896 14.2042 21.9896 13.402C21.9896 12.8823 22.0232 12.8145 22.6499 12.1931C23.0192 11.8315 23.3662 11.436 23.4333 11.3231C23.5452 11.1084 23.534 11.1084 22.9633 11.3005C22.012 11.6394 21.8777 11.5942 22.3477 11.0858C22.6947 10.7242 23.1088 10.0689 23.1088 9.87682C23.1088 9.84293 22.9409 9.89942 22.7506 10.0011C22.5492 10.1141 22.1015 10.2836 21.7658 10.3853L21.1614 10.5773L20.613 10.2045C20.3108 10.0011 19.8856 9.77514 19.6617 9.70734C19.0909 9.54916 18.218 9.57176 17.7032 9.75254C16.3042 10.261 15.4201 11.5716 15.5208 13.0066Z"
                  fill="currentcolor"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://www.sec3.dev/blog"
              className={styles["social-media"]}
              target="_blank"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                  fill="currentcolor"
                ></path>
                <g clipPath="url(#clip0_627_296)">
                  <path
                    d="M17.1218 15.6423C17.1218 18.4703 14.849 20.7629 12.0454 20.7629C9.2418 20.7629 6.96875 18.4698 6.96875 15.6423C6.96875 12.8147 9.24162 10.5215 12.0454 10.5215C14.8491 10.5215 17.1218 12.8142 17.1218 15.6423Z"
                    fill="currentcolor"
                  ></path>
                  <path
                    d="M22.6899 15.6431C22.6899 18.3051 21.5535 20.4639 20.1516 20.4639C18.7497 20.4639 17.6133 18.3051 17.6133 15.6431C17.6133 12.9811 18.7495 10.8223 20.1514 10.8223C21.5533 10.8223 22.6897 12.9804 22.6897 15.6431"
                    fill="currentcolor"
                  ></path>
                  <path
                    d="M24.9689 15.6429C24.9689 18.0274 24.5693 19.9616 24.0762 19.9616C23.583 19.9616 23.1836 18.0279 23.1836 15.6429C23.1836 13.2579 23.5832 11.3242 24.0762 11.3242C24.5691 11.3242 24.9689 13.2577 24.9689 15.6429Z"
                    fill="currentcolor"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_627_296">
                    <rect
                      width="18"
                      height="18"
                      fill="currentcolor"
                      transform="translate(6.96875 6.77148)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </Link>
            <Link
              href="mailto:contact@sec3.dev?subject=I%20want%20a%20Quote"
              className={styles["social-media"]}
              target="_blank"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.1"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
                  fill="currentcolor"
                ></path>
                <path
                  d="M22 10H10C9.175 10 8.5 10.675 8.5 11.5V20.5C8.5 21.325 9.175 22 10 22H22C22.825 22 23.5 21.325 23.5 20.5V11.5C23.5 10.675 22.825 10 22 10ZM21.7 13.1875L16.795 16.255C16.3075 16.5625 15.6925 16.5625 15.205 16.255L10.3 13.1875C10.1125 13.0675 10 12.865 10 12.6475C10 12.145 10.5475 11.845 10.975 12.1075L16 15.25L21.025 12.1075C21.4525 11.845 22 12.145 22 12.6475C22 12.865 21.8875 13.0675 21.7 13.1875Z"
                  fill="currentcolor"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
