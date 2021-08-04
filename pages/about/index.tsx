import Link from "next/link";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";
import Image from "next/image";
import Layout from "../../components/layout";

export default function About() {
  return (
    <Layout home={false}>
      <Head>
        <title>About rick</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Wubba Lubba Dub Dub</p>
      </section>
    </Layout>
  );
}
