'use strict'

const cart = new Cart([]);


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
        if (!checkIfCourseIsAdded(newCourse.name)){
            savedItems.push(newCourse);
            let storingitems = JSON.stringify(savedItems)
            localStorage.setItem('savedItems', storingitems)
            updatecounter();
        }
        // updateCoursesStatus();
    };

    function checkIfCourseIsAdded(courseName) {
        for (let index = 0; index < savedItems.length; index++) {
            const savedCourse = savedItems[index];
            if(courseName === savedCourse.name)
                return true;
        }
        return false;
    }
};
//     function updateCoursesStatus() {
//         let allCourses = document.getElementById("allCourses").children;
//         for (let index = 0; index < allCourses.length; index++) {
//             const courseName = allCourses[index].getElementsByTagName("h2")[0].textContent;
//             if(checkIfCourseIsAdded(courseName)){
//                 allCourses[index].getElementsByTagName("button")[0].disabled = true;
//             }
//         }
//     }

//     updateCoursesStatus();
// };


for (let i = 0; i < Course.allCourses.length; i++) {
    Course.allCourses[i].render();
};