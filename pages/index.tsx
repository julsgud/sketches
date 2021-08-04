import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

import { getSortedPostsData } from "../lib/posts";
import Layout from "../components/layout";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({
  allPostsData,
}: {
  allPostsData: Array<{ id: string; date: string; title: string }>;
}) {
  return (
    <Layout home>
      <Head>
        <title>JulsGL</title>
        <meta name="WebGL" content="Shaders and stuff" />
      </Head>

      <main>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>{date}</small>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </Layout>
  );
}
