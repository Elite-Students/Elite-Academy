'use strict'

const cart = new Cart([]);


Course.prototype.render = function () {

    let allCourses = document.getElementById('allCourses');
    let corsesCont = document.createElement('div')
    allCourses.appendChild(corsesCont);
    corsesCont.setAttribute('id','imgDiv')
console.log(allCourses);
    let newImg = document.createElement('img')
    newImg.src = this.source
    corsesCont.appendChild(newImg);
    newImg.setAttribute('class','imeges')

    let newName = document.createElement('span')
    corsesCont.appendChild(newName);

    let titel = document.createElement('h2');
    newName.appendChild(titel)
    titel.textContent = this.name
    newName.setAttribute('class','name')
// console.log(newName);

    let thePrice = document.createElement('h3')
    newName.appendChild(thePrice)
    thePrice.textContent = this.price
    thePrice.setAttribute('class','price')
// console.log(thePrice);

    let newBtn = document.createElement('button')
    newBtn.textContent = "Add To Cart"
    corsesCont.appendChild(newBtn);
    newBtn.addEventListener('click', tab);
    newBtn.setAttribute('class','addToCart')

    function tab(event) {
        event.preventDefault();
        let newCourse = new Course(titel.textContent, newImg.src, thePrice.textContent);
        if (!checkIfCourseIsAdded(newCourse.name)){
            savedItems.push(newCourse);
            let storingitems = JSON.stringify(savedItems)
            localStorage.setItem('savedItems', storingitems)
            updatecounter();
            
        }

        swal({
            title: "Check Your cart !",
            text: `The ${titel.textContent} has been added succssefuly!`,
            icon: "success",
            button: "Aww yiss!",
          });
    };

    function checkIfCourseIsAdded(courseName) {
        for (let i = 0; i < savedItems.length; i++) {
            let savedCourse = savedItems[i];
            if(courseName === savedCourse.name)
                return true;
        }
        return false;
    }
};

for (let i = 0; i < Course.allCourses.length; i++) {
    Course.allCourses[i].render();
};


swal();