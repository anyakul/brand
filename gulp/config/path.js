import * as nodePath from "path";
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./deploy`;
const srcFolder = `./src`;
const srcHome = `./`
//const buildSite = `./_site`

export const path = {
  build: {
    js: `${buildFolder}/js/`,
    html: `${buildFolder}/`,
    css: `${buildFolder}/css/`,
    images: `${buildFolder}/img/`,
    fonts: `${buildFolder}/fonts/`,
    //ht: `${buildSite}/`
  },
  src: {
    js: `${srcFolder}/js/main.js`,
    images: `${srcFolder}/img/**/*{jpeg,jpg,png,svg,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/style.scss`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    html: `${srcFolder}/**/*.html`,
    scss: `${srcFolder}/scss/**/*.scss`,
    images: `${srcFolder}/img/**/*{jpeg,jpg,svg,png,webp}`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: 'test.yowa.ru'
}
