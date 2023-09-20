import generateElement from "../helper";

export default function Home () {
    const home = generateElement('div','','home')

    const titleContainer = generateElement('div','title-container')
    const title = generateElement('div','title','',"Welcome to Freddy Fazbear's Pizzaria")
    const titleOffset = generateElement('div','title-offset','',"Welcome to Freddy Fazbear's Pizzaria")
    titleContainer.append(title, titleOffset)

    const writeup = generateElement('div','writeup')
    
    const flexVert = generateElement('div', 'vert')
    const homeImg = generateElement('img', 'img-band', '../src/home/band_graphic.jpg', 'Freddy and his band')
    const para = generateElement('div','para','',"Come on down to Freddy's Fazbear Pizzaria, the newest Pizza joint in town!")
    flexVert.append(homeImg, para)
    
    const flex = generateElement('div','flex')
    
    const vertContainer1 = generateElement('div','container vert flex-item')
    const homeImgContainer1 = generateElement('div','home-img-container')
    const foodImg = generateElement('img','img-food','../src/home/food_graphic.png', 'Pizza')
    const para1 = generateElement('div','para','','Enjoy our wide array of dining options while Freddy and his band entertain you with their show')
    homeImgContainer1.append(foodImg)
    vertContainer1.append(homeImgContainer1, para1)
    
    const vertContainer2 = generateElement('div','container vert flex-item')
    const homeImgContainer2 = generateElement('div','home-img-container')
    const arcadeImg = generateElement('img','img-arcade','../src/home/arcade_graphic.png', 'Arcade machine')
    const para2 = generateElement('div','para','',"Have a blast at Freddy's arcade and win attractive prizes")
    homeImgContainer2.append(arcadeImg)
    vertContainer2.append(homeImgContainer2, para2)
    
    const vertContainer3 = generateElement('div','container vert flex-item')
    const homeImgContainer3 = generateElement('div','home-img-container')
    const micImg = generateElement('img','img-mic','../src/home/mic_graphic.png', 'Microphone')
    const para3 = generateElement('div','para','','Enjoy our wide array of dining options while Freddy and his band entertain you with their show')
    homeImgContainer3.append(micImg)
    vertContainer3.append(homeImgContainer3, para3)

    flex.append(vertContainer1, vertContainer2, vertContainer3)
    writeup.append(flexVert, flex)

    home.append(titleContainer, writeup)
    
    return home
}