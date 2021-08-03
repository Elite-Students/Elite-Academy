'use strict'

const cart = new Cart([]);


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

        let storingitems = JSON.stringify(savedItems)
        localStorage.setItem('savedItems', storingitems)
        if (newCourse == storingitems) {
            newBtn.removeEventListener('click', tab)
        };
        updatecounter();

    };

};


for (let i = 0; i < Course.allCourses.length; i++) {
    console.log(Course.allCourses[i])
    Course.allCourses[i].render();
};


let theli = document.getElementById('cart');
let spanElement = document.createElement('span')
theli.appendChild(spanElement)
function updatecounter() {
    let savednumber = localStorage.getItem('savedItems')
    if (savednumber !== null) {
        savedItems = JSON.parse(savednumber)
        spanElement.textContent = savedItems.length
    };
};


updatecounter();


