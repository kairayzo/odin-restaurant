import generateElement from "./helper"
import Home from "./home"
import Menu from "./menu"
import Contact from './contact'

export default function Navbar () {    
    const navbar = generateElement('div','','navbar')
    const logo = generateElement('img','img-logo','images/navbar/logo.png',"Freddy Fazbear's Pizzaria Logo")
    
    const btnGrp = generateElement('div','btn-grp')
    const navBtnHome = generateElement('button', 'nav-btn', '', 'Home')
    const navBreak1 = generateElement('div','nav-break')
    const navBtnMenu = generateElement('button','nav-btn','','Our Menu')
    const navBreak2 = generateElement('div','nav-break')
    const navBtnContact = generateElement('button','nav-btn','','Contact Us')

    navBtnHome.style = 'text-decoration: underline'

    const resetBtnStyles = () => {
        const navBtnGrp = document.querySelectorAll('.nav-btn')
        navBtnGrp.forEach((btn)=>{btn.style = 'text-decoration: none'})
    }

    const handleRouteHome = (e) =>{
        const mainBackground = document.querySelector('.main-background') 
        mainBackground.innerHTML = ''
        mainBackground.append(Home())
        resetBtnStyles()
        e.target.style = 'text-decoration: underline'
    }
    const handleRouteMenu = (e) => {
        const mainBackground = document.querySelector('.main-background') 
        mainBackground.innerHTML = ''
        mainBackground.append(Menu())
        resetBtnStyles()
        e.target.style = 'text-decoration: underline'

    }
    const handleRouteContact = (e) => {
        const mainBackground = document.querySelector('.main-background') 
        mainBackground.innerHTML = ''
        mainBackground.append(Contact())
        resetBtnStyles()
        e.target.style = 'text-decoration: underline'
    }

    navBtnHome.addEventListener('click', handleRouteHome)
    navBtnMenu.addEventListener('click', handleRouteMenu)
    navBtnContact.addEventListener('click', handleRouteContact)

    btnGrp.append(navBtnHome,navBreak1,navBtnMenu,navBreak2,navBtnContact)

    navbar.append(logo, btnGrp)

    return navbar
}

