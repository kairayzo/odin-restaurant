import generateElement from "../helper";

export default function Contact () {
    const contact = generateElement('div','','contact')

    const titleContainer = generateElement('div','title-container')
    const title = generateElement('div','title','',"Contact Us")
    const titleOffset = generateElement('div','title-offset','',"Contact Us")
    titleContainer.append(title, titleOffset) 

    const contactContainer = generateElement('div','contact-container')
    
    const flexItem1 = generateElement('div','flex-item gap')
    const flexItem2 = generateElement('div','flex-item')

    const div11 = generateElement('div')
    const contactParaContainer1 = generateElement('div','contact-para-container')
    const contactImgContainer1 = generateElement('div','contact-img-container')
    const phoneImg = generateElement('img','img-phone','../src/contact/phone_graphic.png','Phone Icon')
    const div111 = generateElement('div','','','Email us:')
    contactImgContainer1.append(phoneImg)
    contactParaContainer1.append(contactImgContainer1,div111)
    const email = generateElement('a', '','mailto:freddyentertainment@example.com','freddyentertainment@example.com')
    div11.append(contactParaContainer1,email)

    const div12 = generateElement('div')
    const contactParaContainer2 = generateElement('div','contact-para-container')
    const contactImgContainer2 = generateElement('div','contact-img-container')
    const TVImg = generateElement('img','img-TV','../src/contact/TV_graphic.png','Television Icon')
    const div121 = generateElement('div','','','Call us:')
    contactImgContainer2.append(TVImg)
    contactParaContainer2.append(contactImgContainer2,div121)
    const phone = generateElement('div', 'contact-text-container','','1234-5678-900')
    div12.append(contactParaContainer2,phone)

    flexItem1.append(div11,div12)

    const contactMapContainer = generateElement('div','contact-map-container')
    const contactParaContainer3 = generateElement('div','contact-para-container')
    const contactImgContainer3 = generateElement('div','contact-img-container')
    const CarImg = generateElement('img','img-car','../src/contact/car_graphic.png','Car Icon')
    const div2 = generateElement('div','','','Locate Us:')
    contactImgContainer3.append(CarImg)
    contactParaContainer3.append(contactImgContainer3,div2)
    const contactImgContainer4 = generateElement('div','contact-map-container')
    const mapImg = generateElement('img','img-map','../src/contact/map_graphic.jpg',"Map to Freddy's Pizzaria")
    contactImgContainer4.append(mapImg)
    contactMapContainer.append(contactParaContainer3,contactImgContainer4)

    flexItem2.append(contactMapContainer)

    contactContainer.append(flexItem1,flexItem2)
    contact.append(titleContainer,contactContainer)

    return contact

}