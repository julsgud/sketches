import Head from "next/head";
import Image from "next/image";
import styles from "../styles/layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { ReactNode } from "react";

import { styled } from "@stitches/react";

export const Main = styled("main", {
  display: "flex",
  flexDirection: "column",
  padding: "48px",
});

export const Header = styled("header", {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const HeaderName = styled("h2", {
  textTransform: "uppercase",
  paddingLeft: "24px",
});

const name = "Juls";
export const siteTitle = "Web";

export default function Layout({
  children,
  home = false,
}: {
  children: ReactNode;
  home?: boolean;
}) {
  return (
    <Main>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
      </Head>
      <Header>
        {home ? (
          <>
            <Image
              priority
              src="https://res.cloudinary.com/julsgc/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max/v1628086267/Juls/2015-12-10_08.57.00.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            />
          </>
        ) : null}
      </Header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </Main>
  );
}
