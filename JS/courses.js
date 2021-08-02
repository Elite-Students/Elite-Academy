'use strict'

const cart = new Cart([])
// let spanElement = document.getElementsByClassName('coursesTitle');
// let imgElemant = document.getElementsByClassName('imgcourses');


// function clicking(event) {
//     event.preventDefault();
//     addCourseToCart(event);
//     cart.savetoLocalStorage();


// };

// function addCourseToCart(event) {
//     let button = event.target
//     let courses = button.parentElement
//     let title = courses.getElementsByClassName('coursesTitle')[0].innerText
//     cart.addcourse(title)
//     console.log(cart)
// };

let savedItems = [];
Course.prototype.render = function () {

    let allCourses = document.getElementById('allCourses');
    let corsesCont = document.createElement('div')
    allCourses.appendChild(corsesCont);

    let newImg = document.createElement('img')
    newImg.src = this.source
    corsesCont.appendChild(newImg);

    let newName = document.createElement('span')
    corsesCont.appendChild(newName);

    let titel = document.createElement('h2');
    newName.appendChild(titel)
    titel.textContent = this.name

    let thePrice = document.createElement('h3')
    newName.appendChild(thePrice)
    thePrice.textContent = this.price

    let newBtn = document.createElement('button')
    newBtn.textContent = "Add To Cart"
    corsesCont.appendChild(newBtn);
    newBtn.addEventListener('click', tab);

    function tab(event) {
        event.preventDefault();
        let newCourse = new Course(titel.textContent, newImg.src, thePrice.textContent);
        savedItems.push(newCourse);

        console.log(savedItems);
        localStorage.setItem('savedItems', JSON.stringify(savedItems))
        updatecounter();
        // onLoadCartNumber();
        newBtn.removeEventListener('click', tab)
    };

};

for (let i = 0; i < Course.allCourses.length; i++) {
    console.log(Course.allCourses[i])
    Course.allCourses[i].render();

};

function updatecounter() {
    let courseNumber = localStorage.getItem('cartNumbers')
    courseNumber = parseInt(courseNumber)
    if (courseNumber !== null) {

        if (courseNumber) {
            localStorage.setItem('cartNumbers', courseNumber + 1)
            document.getElementById('cart').textContent = courseNumber + 1;
            console.log(courseNumber)
        }
        else {
            localStorage.setItem('cartNumbers', 1)
            document.getElementById('cart').textContent = 1

            console.log(courseNumber)

        };
    };
};


// function onLoadCartNumber() {
//     let courseNumber = localStorage.getItem('cartNumbers')
//     courseNumber = parseInt(courseNumber)
//     if (courseNumber!==null){
//         document.getElementById('cart').textContent = courseNumber
//         console.log(document.getElementById('cart').textContent)

 
//     };

// };


