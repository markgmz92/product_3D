import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFDB48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './public/public/threejs.png',
  fullDecal: './public/public/threejs.png'
});

export default state;
