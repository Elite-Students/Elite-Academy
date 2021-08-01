'use strict'
let table = document.getElementById('cartTable')
table.addEventListener('click', removetheCourse)
let cartItem;
let savedItems = []


//-----------------------------------------------

// a function to load the cart by get the items from localstorage
function loadCart() {
    let courseCart = JSON.parse(localStorage.getItem('cart') || []);
    console.log(courseCart)
    cartItem = new Cart(courseCart)
    console.log(cartItem, 'hi')
    if (courseCart !== null) {

        cartItem = courseCart

    }
    console.log(cartItem.length)
    savedItems.push(cartItem)
    console.log(savedItems)
}


//--------------------------------------------------------

//a function to delete the cart courses row from te table
function deleteRowforCourse() {


}

//--------------------------------------------------------

// a function to show the cart again
function showtheCart() {

    let tBody = document.getElementById('tbody');
    for (let i = 0; i < savedItems.length; i++) {
        let tableRowElement = document.createElement('tr')
        tBody.appendChild(tableRowElement);
        console.log(tableRowElement)
        let removeButton = document.createElement('button')
        tableRowElement.appendChild(removeButton)
        removeButton.textContent = (`Remove`)
        let dataElement2 = document.createElement('td')
        tableRowElement.appendChild(dataElement2)
       
        let dataElement3 = document.createElement('img')
        tableRowElement.appendChild(dataElement3)
        let dataElement4 = document.createElement('td')
        tableRowElement.appendChild(dataElement4)
        for (let j = 0; j < Course.allCourses.length; j++) {
            dataElement2.textContent = (`${Course.allCourses[j].name}`)
            dataElement3.src = (`${Course.allCourses[j].source} `)
            dataElement3.width = '50'
            dataElement3.height = '30'
            dataElement4.textContent = (`${Course.allCourses[j].price} `)
        }







    }
  console.log(tBody)
}
//----------------------------------------------------------

// a function for the addlistener once we clicked on the table

function removetheCourse(event) {
    let selectedItem = event.target.textContent
    if (selectedItem === 'Remove') {
        cart.removeCourse(selectedItem);
        cart.savetoLocalStorage()
        showtheCart()
    }
}
//---------------------------------------------------------------

// a function for clicking confirm button
let confirmButton = document.getElementById('confirmButton')
confirmButton.addEventListener('click', getConfirmation)
function getConfirmation() {
    alert(`Thanks for confirmation, our consults will contact you ASAP,check your email within two days`)

}
//-----------------------------------------------------------------
//---------------------------------------------------------------
// a function to render table with buttons
function renderTable() {

    loadCart();
    // deleteRowforCourse
    showtheCart();
}
renderTable();