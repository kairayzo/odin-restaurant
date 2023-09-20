import generateElement from "../helper";

export default function Menu () {
    const menu = generateElement('div','','menu')

    const titleContainer = generateElement('div','title-container')
    const title = generateElement('div','title','',"Our Selection")
    const titleOffset = generateElement('div','title-offset','',"Our Selection")
    titleContainer.append(title, titleOffset) 

    const menuContainer = generateElement('div','menu-container')
    const menuGrid = generateElement('div','menu-grid')
    const menuImgContainer1 = generateElement('div','menu-img-container')
    const pizzaImg = generateElement('img','', '../src/menu/pizza_graphic.png','Pizza')
    menuImgContainer1.append(pizzaImg)
    const menuImgContainer2 = generateElement('div','menu-img-container')
    const burgerImg = generateElement('img','', '../src/menu/burger_graphic.png','Burger')
    menuImgContainer2.append(burgerImg)
    const menuImgContainer3 = generateElement('div','menu-img-container')
    const rollImg = generateElement('img', '','../src/menu/roll_graphic.png','Roll')
    menuImgContainer3.append(rollImg)
    const menuImgContainer4 = generateElement('div','menu-img-container')
    const saladImg = generateElement('img','', '../src/menu/salad_graphic.png','Salad')
    menuImgContainer4.append(saladImg)
    const menuImgContainer5 = generateElement('div','menu-img-container')
    const nuggetImg = generateElement('img','', '../src/menu/nugget_graphic.png','Nugget')
    menuImgContainer5.append(nuggetImg)
    const menuImgContainer6 = generateElement('div','menu-img-container')
    const friesImg = generateElement('img','', '../src/menu/fries_graphic.png','French Fries')
    menuImgContainer6.append(friesImg)
    const menuImgContainer7 = generateElement('div','menu-img-container')
    const hotdogImg = generateElement('img', '','../src/menu/hotdog_graphic.png','Hotdog')
    menuImgContainer7.append(hotdogImg)
    const menuImgContainer8 = generateElement('div','menu-img-container')
    const drinkImg = generateElement('img','', '../src/menu/drink_graphic.png','Soda drink')
    menuImgContainer8.append(drinkImg)
    const menuImgContainer9 = generateElement('div','menu-img-container')
    const donutImg = generateElement('img','', '../src/menu/donut_graphic.png','Donut')
    menuImgContainer9.append(donutImg)

    menuGrid.append(menuImgContainer1,menuImgContainer2,menuImgContainer3,menuImgContainer4,menuImgContainer5,menuImgContainer6,menuImgContainer7,menuImgContainer8,menuImgContainer9)
    menuContainer.append(menuGrid)
    menu.append(titleContainer, menuContainer)
    
    return menu
}