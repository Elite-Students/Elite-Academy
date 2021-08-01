'use strict'
let cart=new Cart([]);
let divElement=document.getElementsByClassName('courses')
let imgElemant=document.getElementsByClassName('imgcourses');

for (let i=0;i<Course.allCourses.length;i++){
    imgElemant[i].src=Course.allCourses[i].source
    let h2Element=document.createElement('h2');
    divElement[i].appendChild(h2Element)
    h2Element.textContent=(`${Course.allCourses[i].name}`)

}

    
let buttons=document.getElementsByClassName('addCart')
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click',clicking)

}

function clicking(event){
event.preventDefault ();
}


function addCourseToCart (event){
// event.preventDefault(); 
let btn =event.target
let shopItem = btn.parentElement.parentElement
let allCourses=shopItem.getElementsByClassName('addCart')
addItemToCat(addcart) 
console.log(addcart);


    
//     allCourses.setAttribute("name","div")

// cart.addcourse(event.target.select.value)
// // console.log(allCourses,"hi")
// console.log (event)


}
 
function addItemToCat(addcart) {

    
}
    

// addCourseToCart ()
