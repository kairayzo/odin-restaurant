import './style.css'
import generateElement from './helper'

import Navbar from './navbar'
import Home from './home'
import Background from './background'

const content = generateElement('div','','content')
const background = Background()
const navbar = Navbar()
const home = Home()

content.appendChild(navbar)
content.appendChild(background)

document.body.appendChild(content)
const mainBackground = document.querySelector('.main-background')
mainBackground.append(home)