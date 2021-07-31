'use strict'
let divElement=document.getElementsByClassName('courses')
let imgElemant=document.getElementsByClassName('imgcourses');



for (let i=0;i<Course.allCourses.length;i++){
    imgElemant[i].src=Course.allCourses[i].source
    let h2Element=document.createElement('h2');
    divElement[i].appendChild(h2Element)
    h2Element.textContent=(`${Course.allCourses[i].name}`)

}