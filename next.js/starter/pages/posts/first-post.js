import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { getGithubProfile } from "../../lib/github";

export default function FirstPost({ profile }) {
  return (
    <Layout profile={profile}>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

export async function getStaticProps() {
  const profile = await getGithubProfile();

  return {
    props: {
      profile,
    },
  };
}
