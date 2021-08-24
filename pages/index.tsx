import { styled } from '@stitches/react';
import Head from 'next/head';
import { ShaderCanvas } from '../components/ShaderCanvas';
import type { Shader } from '../lib/getShaders';
import { getShaders } from '../lib/getShaders';

export const getStaticProps = () => {
  const shaders = getShaders();

  return {
    props: {
      shaders,
    },
  };
};

const Grid = styled('ul', {
  '& > * + *': {
    marginLeft: '24px',
  },
  display: 'flex',
  flexDirection: 'row',
  padding: '48px',
  width: '100vw',
});

export default function Home({ shaders }: { shaders: Shader[] }) {
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
