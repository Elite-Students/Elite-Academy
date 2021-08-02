'use strict'
const cart = new Cart([])
let spanElement = document.getElementsByClassName('coursesTitle')
let imgElemant = document.getElementsByClassName('imgcourses');

for (let i = 0; i < Course.allCourses.length; i++) {
    imgElemant[i].src = Course.allCourses[i].source
    let h2Element = document.createElement('h2');
    spanElement[i].appendChild(h2Element)
    h2Element.textContent = (`${Course.allCourses[i].name}`)

}


let buttons = document.getElementsByClassName('addCart')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', clicking)

}

function clicking(event) {
    event.preventDefault();
    addCourseToCart(event);
    cart.savetoLocalStorage();
    updatecounter();
    onLoadCartNumber();
    
}

function addCourseToCart(event) {
    let button = event.target
    let courses = button.parentElement
    let title = courses.getElementsByClassName('coursesTitle')[0].innerText
    cart.addcourse(title)
    console.log(cart)
}

function updatecounter() {
    let courseNumber = localStorage.getItem('cartNumbers')
    courseNumber = parseInt(courseNumber)
   
    if (courseNumber) {
        localStorage.setItem('cartNumbers', courseNumber + 1)


        document.getElementsByClassName('cart span').textContent = courseNumber + 1;
        console.log(courseNumber)
    }
    else {
        localStorage.setItem('cartNumbers', 1)
        document.getElementsByClassName('cart span').textContent = 1

        console.log(courseNumber)

    }
}

function onLoadCartNumber() {
    let courseNumber = localStorage.getItem('cartNumbers')
    if (courseNumber) {
        document.getElementsByClassName('cart span').textContent = courseNumber
        

    }


}



