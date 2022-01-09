import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { getGithubProfile } from "../lib/github";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

// import useSWR from 'swr'

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }

export default function Home({ profile, allPostsData }) {
  return (
    <Layout profile={profile} home>
      <Head>
        <title>{profile.login}'s next.js blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{profile.bio}</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const profile = await getGithubProfile();
  const allPostsData = getSortedPostsData();

  return {
    props: {
      profile,
      allPostsData,
    },
  };
}
