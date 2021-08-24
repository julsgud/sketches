import Link from "next/link";
import { styled } from "@stitches/react";
import Head from "next/head";
import { ShaderCanvas } from "../components/ShaderCanvas";
import { getShaders, Shader } from "../lib/getShaders";

export async function getStaticProps() {
  const shaders = getShaders();

  return {
    props: {
      shaders,
    },
  };
}

const Grid = styled("ul", {
  width: "100vw",
  padding: "48px",
  display: "flex",
  flexDirection: "row",
  "& > * + *": {
    marginLeft: "24px",
  },
});

export default function Home({ shaders }: { shaders: Array<Shader> }) {
  return (
    <>
      <Head>
        <title>JulsGL</title>
        <meta content="Shaders and stuff" name="WebGL" />
      </Head>

      <Grid>
        {shaders.map(({ id, frag, vert }) => (
          <li key={id}>
            <a href={`/sketches/${id}`}>
              <ShaderCanvas fragment={frag} vertex={vert} />
            </a>
          </li>
        ))}
      </Grid>
    </>
  );
}
