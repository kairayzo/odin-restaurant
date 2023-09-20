export default function generateElement(tag, cls='', id='', innerHTML='') {
    const elem = document.createElement(tag)

    if (cls) {
        if (cls.includes(' ')) {
            const clsList = cls.split(' ')
            for (const c in clsList) {
                elem.classList.add(clsList[c])
            }
        } else {
            elem.classList.add(cls)
        }
    }


    if (tag == 'img') {
        elem.src = id
        elem.alt = innerHTML
        return elem
    }

    if (tag == 'a') {
        elem.href = id
        elem.innerHTML = innerHTML
        return elem
    }

    if (id) {
        elem.id = id 
    }

    if (innerHTML) {
        elem.innerHTML = innerHTML
    }
    
    return elem
}
