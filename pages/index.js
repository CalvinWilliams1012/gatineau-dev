import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import LanguageSelector from "../components/LanguageSelector/LanguageSelector";
import SearchBar from "../components/SearchBar/SearchBar";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gatineau Dev</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/Logo.png" />
        <script
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API}&libraries=places`}
        ></script>
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
        <h1>Unofficial Gatineau Assessment Roll</h1>
        <SearchBar />
        <p>
          Note this is unofficial, so I provide no gaurantee regarding the
          accuracy of the data, the official Gatineau assessment roll website
          can be found here. I created this site to modernize the system due to
          the outdated user interface, outdated search funcionality, and display
          the data directly rather than through a file as well as support both
          French and English.
        </p>
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
