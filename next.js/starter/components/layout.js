import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Layout({ children, profile, home = false }) {
  const title = `${profile.login}'s next.js blog`;

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_img" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <a href={profile.html_url}>
              <img
                src={profile.avatar_url}
                className={utilStyles.borderCircle}
                height={144}
                width={144}
                alt={profile.name}
              />
            </a>
            <h1 className={utilStyles.heading2Xl}>{profile.name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <img
                  priority
                  src={profile.avatar_url}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={profile.name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{profile.name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
