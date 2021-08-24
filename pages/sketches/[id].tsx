import { ShaderCanvas } from "../../components/ShaderCanvas";
import { getShader, getShadersIds } from "../../lib/getShaders";
import type { Shader as ShaderType } from "../../lib/getShaders";
import { styled } from "@stitches/react";

export async function getStaticPaths() {
  const paths = getShadersIds().map((id) => {
    return {
      params: { id },
    };
  });

  return {
    fallback: false,
    paths,
  };
}

export async function getStaticProps({ params }: { params: { id: string } }) {
  const shader = getShader(params.id);

  return {
    props: {
      ...shader,
    },
  };
}

const Container = styled("div", {
  width: "100%",
  height: "100%",
});

export default function Shader({ frag, vert }: ShaderType) {
  return <ShaderCanvas fragment={frag} vertex={vert} />;
}
