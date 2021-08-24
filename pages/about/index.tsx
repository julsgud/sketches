import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import utilStyles from "../../styles/utils.module.css";

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
