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
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this course!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your  Chosed course file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your course file is safe!");
        }
      });
    
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

    let tBody=document.getElementById('bodyTable')
    tBody.remove();
    let yourCart=document.getElementById('yourCart')
    yourCart.remove();
    localStorage.clear();


    // swal({
    //     title: 'Input email address',
    //     input: 'email',
    //     inputPlaceholder: 'Enter your email address'
    //   }).then(function (email) {
    //     swal({
    //       type: 'success',
    //       html: 'Entered email: ' + email
    //     })
    //   })

    swal({
        title: 'Submit email to get information about the course',
        input: 'email',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: function (email) {
          return new Promise(function (resolve, reject) {
            setTimeout(function() {
              if (email === 'taken@example.com') {
                reject('This email is already taken.')
              } else {
                resolve()
              }
            }, 2000)
          })
        },
        allowOutsideClick: false
      }).then(function (email) {
        swal({
          type: 'success',
          title: 'confirm request finished!',
          html: 'Submitted email: ' + email
        })
      })

     
   
    
};





  swal();
  swal();
  swal();
