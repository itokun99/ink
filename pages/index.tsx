import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Hi, I'm Ito, Software Engineer`}</title>
        <meta name="description" content="Hi, I'm Ito, Software Engineer. I build a Dream Software like people want" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {`Hi, I'm Ito`}
        </h1>

        <p className={styles.description}>
          Your partner to create your Dream App
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/itokun99" target="_blank" className={styles.card} rel="noreferrer">
            <h2>Github &rarr;</h2>
            <p>{`Explore anything I've ever made and worked on`}</p>
          </a>

          <a href="https://id.linkedin.com/in/indrawan-lisanto" target="_blank" className={styles.card} rel="noreferrer">
            <h2>LinkedIn &rarr;</h2>
            <p>See my formal account for job application purposes</p>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=100019655381248"
            className={styles.card}
            target="_blank" rel="noreferrer"
          >
            <h2>Facebook &rarr;</h2>
            <p>Be a friend and be a part of life by laughing with me</p>
          </a>

          <a
            href="https://www.instagram.com/indrawanlisanto/"
            target="_blank"
            className={styles.card} rel="noreferrer"
          >
            <h2>Instagram &rarr;</h2>
            <p>
              Follow whatever I post for your enjoyment
            </p>
          </a>

          <a
            href="https://www.canva.com/design/DADbA-z5gCY/view"
            className={styles.card}
            target="_blank" rel="noreferrer"
          >
            <h2>My Resume &rarr;</h2>
            <p>
              See what I can do to help you
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
