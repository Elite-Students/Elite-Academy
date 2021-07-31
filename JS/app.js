'use strict'

// constructor function for courses
Course.allCourses = [];
function Course(name, src, price) {
    this.name = name;
    this.source = src;
    this.price = price;
    Course.allCourses.push(this)
}

//-------------------------------------------------------
// constructor function for the cart 
function Cart(item) {
    this.items = item;
}
//-------------------------------------------------------
// constructor function for the cartItems
function CartCourse(course) {
    this.course = course;
}

//------------------------------------------------------------

// functions related to Cart ( addCourse, savetoLocal,removeCourse)
// all of them are prototypes as we will use (this)

Cart.prototype.addcourse = function (course) {
    let newCourse = new CartCourse(course);
    this.items.push(newCourse);
}
//------------------------------------------------------------
Cart.prototype.savetoLocalStorage = function () {
    localStorage.setItem('cart', JSON.stringify(this.items));
}
//--------------------------------------------------------
Cart.prototype.removeCourse = function (item) {
  this.items.splice(item,1)
        console.log('hi')
        console.log(cart)


        // }
    // }


}
//---------------------------------------------------------


function corsesGenerat() {
    new Course ('hi','https://thumbs.dreamstime.com/b/hi-sticker-retro-style-vector-illustration-isolated-white-background-hi-sticker-retro-style-134866280.jpg','12')
    
    new Course (
        'marhaba','https://thumbs.dreamstime.com/b/hi-sticker-retro-style-vector-illustration-isolated-white-background-hi-sticker-retro-style-134866280.jpg','13'
    )
}

corsesGenerat()
console.log(Course.allCourses);