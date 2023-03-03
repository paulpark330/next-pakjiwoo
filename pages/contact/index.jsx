import { Instagram } from "@mui/icons-material";
import Head from "next/head";

import styles from "../../styles/Contact.module.scss";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Jiwoo Park is a Korean American photographer based in Seoul Korea." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <h1>Contact</h1>
        <p>Phone Number: +82) 10 9512 0125</p>

        <p>E-mail: gwoocolor@gmail.com</p>

        <a
          href="https://www.instagram.com/pakjiwoo/"
          target="_blank"
          rel="noreferrer"
        >
          <Instagram fontSize="large" />
        </a>
      </div>
    </>
  );
};

export default Contact;
