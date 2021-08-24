import fs from 'fs';
import path from 'path';

const sketches = path.join(process.cwd(), 'pages/sketches');

export type Shader = {
  id: string;
  frag: string;
  vert: string;
};

export const getShadersIds = (): string[] => {
  return fs
    .readdirSync(sketches, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

export const getShader = (id: string): Shader => {
  const shaderFilesPath = path.join(sketches, id);
  const shaderFiles = fs.readdirSync(shaderFilesPath);

  const frag = fs.readFileSync(
    path.join(shaderFilesPath, shaderFiles[0]),
    'utf-8'
  );

  const vert = fs.readFileSync(
    path.join(shaderFilesPath, shaderFiles[1]),
    'utf-8'
  );

  return {
    frag,
    id,
    vert,
  };
};

export const getShaders = () => {
  const ids = getShadersIds();

  return ids.map((id) => getShader(id));
};
