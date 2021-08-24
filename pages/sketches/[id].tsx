/* eslint-disable filenames/match-exported */
import { styled } from "@stitches/react";
import { ShaderCanvas } from "../../components/ShaderCanvas";
import { getShader, getShadersIds } from "../../lib/getShaders";
import type { Shader as ShaderType } from "../../lib/getShaders";

export const getStaticPaths = async () => {
  const paths = getShadersIds().map((id) => {
    return {
      params: { id },
    };
  });

  return {
    fallback: false,
    paths,
  };
};

export const getStaticProps = ({ params }: { params: { id: string } }) => {
  const shader = getShader(params.id);

  return {
    props: {
      ...shader,
    },
  };
};

export default function Shader({ frag, vert }: ShaderType) {
  return <ShaderCanvas fragment={frag} vertex={vert} />;
}
