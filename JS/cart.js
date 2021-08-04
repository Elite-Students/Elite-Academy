'use strict'

const tableCart = document.getElementById('cartTable');
console.log(tableCart);
tableCart.addEventListener('click', removetheCourse);
let cartItem;
//-----------------------------------------------

// a function to load the cart by get the items from localstorage
function loadCart() {
    let courseCart = JSON.parse(localStorage.getItem('savedItems') || []);
    cartItem = new Cart(courseCart)
    if (courseCart !== null) {
        cartItem = courseCart
    };
};

loadCart();

//--------------------------------------------------------
// a function to show the cart again

function showtheCart() {
    let tBody = document.createElement('tbody')
    tableCart.appendChild(tBody);
    tBody.setAttribute('id','bodyTable')

    for (let i = 0; i < cartItem.length; i++) {
        let tableRowElement = document.createElement('tr')
        tBody.appendChild(tableRowElement);
        tableRowElement.setAttribute('class','rows')
        let divImages=document.createElement('div')
        tableRowElement.appendChild(divImages)
        let dataElement3 = document.createElement('img')
        divImages.appendChild(dataElement3)
        divImages.setAttribute('class','imgDiv')
        dataElement3.src = `${cartItem[i].source} `
        dataElement3.width = '50'
        dataElement3.height = '30'
        let h2Element = document.createElement('td')
        tableRowElement.appendChild(h2Element)
        h2Element.textContent = `${cartItem[i].name}`
        let dataElement4 = document.createElement('td')
        tableRowElement.appendChild(dataElement4)
        dataElement4.textContent = `${cartItem[i].price} `
        let removeButton = document.createElement('button')
        tableRowElement.appendChild(removeButton)
        removeButton.textContent = (`X`)
    };
};

//----------------------------------------------------------

// a function for the addlistener once we clicked on the table

function removetheCourse(event) {

    let buttonclicked = event.target
    buttonclicked.parentElement.remove();
    let removed= cartItem.splice(buttonclicked,1);
    console.log(removed)
    localStorage.setItem('savedItems', JSON.stringify(cartItem));

};

showtheCart();

//---------------------------------------------------------------
 // an alert fot conifirmation button 

let confButton=document.getElementById('confirmButton');
confButton.addEventListener('click',alertButton);
function alertButton() {
    alert(`Thank you for registration, our consulting team will contact you` );
    let tBody=document.getElementById('bodyTable')
    tBody.remove();
    let yourCart=document.getElementById('yourCart')
    yourCart.remove();
    localStorage.clear();
    
};

