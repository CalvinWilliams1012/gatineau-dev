import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import LanguageSelector from '../components/LanguageSelector/LanguageSelector'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gatineau Dev</title>
        <link rel="icon" href="/Logo.png" />
      </Head>
      <div>
        <Image 
          src="/Logo-Transparent.png"
          alt="Gatineau scribbled logo"
          width={174}
          height={141}
        />
        <LanguageSelector/>
      </div>
      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
