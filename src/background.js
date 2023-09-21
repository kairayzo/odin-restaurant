import generateElement from "./helper";

export default function Background() {
    const background = generateElement('div','background')
    const sideBackgroundLeft = generateElement('div','side-background')
    const mainBackground = generateElement('div','main-background')
    const sideBackgroundRight = generateElement('div','side-background')
    background.append(sideBackgroundLeft, mainBackground, sideBackgroundRight)
    return background
}