import { loadCssFile, readDirection } from './utils';

const direction = readDirection();

export default function ready(callback) {
  const cssFile = direction === 'rtl' ? 'styles/App.rtl.css' : 'styles/App.css';
  loadCssFile(cssFile).then(callback);
    console.log("container");

}
