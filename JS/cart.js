'use strict'

const tableCart = document.getElementById('cartTable');
console.log(tableCart);
tableCart.addEventListener('click', removetheCourse);
let cartItem;
//-----------------------------------------------

// a function to load the cart by get the items from localstorage
function loadCart() {
    let courseCart = JSON.parse(localStorage.getItem('savedItems') || []);
    // console.log(courseCart)
    cartItem = new Cart(courseCart)
    console.log(cartItem, 'hi')
    if (courseCart !== null) {
        cartItem = courseCart

    };
    console.log(cartItem)
};

loadCart()
//--------------------------------------------------------

//a function to delete the cart courses row from te table
// function removetheCourse() {
// let buttons=document.getElementsByTagName('button').value
// console.log(buttons)
// for (let index = 0; index < cartItem.length; index++) {
//     buttons.addEventListener('click',toDo)
//     function toDo(event){
//         let btn=event.target
//         let value=btn.textContent
//         if(value==='Remove'){

//             tableCart.deleteRow(i)
//         }
    
//     } 
// }

// };

//--------------------------------------------------------
console.log(cartItem)
// a function to show the cart again
function showtheCart() {

    let tBody = document.createElement('tbody')
    tableCart.appendChild(tBody);
    for (let i = 0; i < cartItem.length; i++) {
        let tableRowElement = document.createElement('tr')
        tBody.appendChild(tableRowElement);
        //     console.log(tableRowElement)

        let dataElement3 = document.createElement('img')
        tableRowElement.appendChild(dataElement3)
        dataElement3.src = `${cartItem[i].source} `
        dataElement3.width = '50'
        dataElement3.height = '30'
        let h2Element = document.createElement('h2')
        tableRowElement.appendChild(h2Element)
        h2Element.textContent=`${cartItem[i].name}`
        let dataElement4 = document.createElement('td')
        tableRowElement.appendChild(dataElement4)
        dataElement4.textContent = `${cartItem[i].price} `
        let removeButton = document.createElement('button')
        tableRowElement.appendChild(removeButton)
        removeButton.textContent = (`Remove`)

    };


};

//----------------------------------------------------------

// a function for the addlistener once we clicked on the table

// function removetheCourse(event) {
//     console.log(event);
//     let selectedItem = event.target.textContent
//     if (selectedItem === 'Remove') {
//         cart.removeCourse(selectedItem);
//         cart.savetoLocalStorage();

//     };
// };
showtheCart();

//---------------------------------------------------------------

// a function for clicking confirm button
// let confirmButton = document.getElementById('confirmButton');
// confirmButton.addEventListener('click', getConfirmation);
// function getConfirmation() {
//     alert(`Thanks for confirmation, our consults will contact you ASAP,check your email within two days`)

// };
//-----------------------------------------------------------------
// a function to render table with buttons
// function renderTable() {

//     loadCart();
//     // deleteRowforCourse
//     showtheCart();
// };
// renderTable();