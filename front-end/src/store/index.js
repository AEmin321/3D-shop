import { proxy } from "valtio";

const state = proxy({
    isHome: true,
    color: '#F73859',
    isFullTexture: false,
    isLogoTexture: true,
    logoDecal: './cslogo.png',
    fullDecal: './cslogo.png'
})

export default state