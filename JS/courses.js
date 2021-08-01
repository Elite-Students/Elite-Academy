'use strict'
let cart=new Cart([])
let divElement=document.getElementsByClassName('courses')
let imgElemant=document.getElementsByClassName('imgcourses');
console.log(divElement);
for (let i=0;i<Course.allCourses.length;i++){
    imgElemant[i].src=Course.allCourses[i].source
    let h2Element=document.createElement('h2');
    divElement[i].appendChild(h2Element)
    h2Element.textContent=(`${Course.allCourses[i].name}`)

}

    
let addToCart=document.getElementsByClassName('addCart')
for (let i = 0; i < addToCart.length; i++) {
    addToCart[i].addEventListener('click',clicking)

}

function clicking(event){
event.preventDefault ();
addCourseToCart()


}



function addCourseToCart (event){
console.log(event.target);
    // let  btn=event.target
    //  console.log(btn);
    // let courseItem=btn.parentElement
    // let title=courseItem.getElementByTagName('h2')[0].value

    // console.log(title);
//     let anything=[];

}
//     let allCourses=document.getElementById('allCourses')
//     allCourses.setAttribute("name","div")

// cart.addcourse(event.target.select.value)
// console.log(allCourses,"hi")
// console.log (cart)



    

// addCourseToCart ()
