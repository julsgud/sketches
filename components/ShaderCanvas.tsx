import { styled } from "@stitches/react";
import { Renderer, Program, Color, Mesh, Triangle } from "ogl-typescript";
import { useRef, useLayoutEffect } from "react";

const Container = styled("div", {
  width: "100%",
  height: "100%",
  "& > canvas": {
    width: "100% !important",
    height: "100% !important",
  },
});

export const ShaderCanvas = ({
  vertex,
  fragment,
  className,
  uniforms,
}: {
  vertex: string;
  fragment: string;
  className?: string;
  uniforms?:
    | {
        [name: string]: {
          value: any;
        };
      }
    | undefined;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const renderer = new Renderer();
    const gl = renderer.gl;

    if (containerRef.current) {
      containerRef.current.appendChild(gl.canvas);

      gl.clearColor(1, 1, 1, 1);

      renderer.setSize(
        containerRef.current?.clientWidth,
        containerRef.current?.clientWidth
      );
    }

    const geometry = new Triangle(gl);

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms,
    });

    const mesh = new Mesh(gl, { geometry, program });

    const update = (t: number) => {
      requestAnimationFrame(update);

      renderer.render({ scene: mesh });
    };

    const animationHandler = requestAnimationFrame(update);

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      cancelAnimationFrame(animationHandler);
      if (containerRef.current) containerRef.current.removeChild(gl.canvas);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Container className={className} ref={containerRef} />;
};
