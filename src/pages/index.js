import Head from 'next/head';
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>$BABABILL Memecoin</title>
        <meta name="description" content="$BABABILL Memecoin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* Content goes here */}
      </main>
    </div>
  );
}