import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gatineau Dev</title>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&display=swap" rel="stylesheet"/>
        <link rel="icon" href="/Logo.png" />
      </Head>
      <header className={styles.header}>
        <Image
          src="/Logo-Transparent.png"
          alt="Gatineau scribbled logo"
          width={174}
          height={141}
        />
        <LanguageSelector />
      </header>

      <main className={styles.main}>
        <h1>Unofficial Gatineau Assesment Roll</h1>
        <p>Note this is unofficial, so I provide no gaurantee regarding the accuracy of the data, the official Gatineau assesment roll website can be found here. 

I created this site to modernize the system due to the outdated user interface, outdated search funcionality, and display the data directly rather than through a file as well as support both French and English.</p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://calvinwilliams.ca"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Calvin Williams
        </a>
      </footer>
    </div>
  );
}
