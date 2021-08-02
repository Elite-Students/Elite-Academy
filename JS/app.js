'use strict'

// constructor function for courses
Course.allCourses = [];
function Course(name, src, price) {
    this.name = name;
    this.source = src;
    this.price = price;
    Course.allCourses.push(this)
};

//-------------------------------------------------------
// constructor function for the cart 
function Cart(item) {
    this.items = item;
};
//-------------------------------------------------------
// constructor function for the cartItems
function CartCourse(course) {
    this.course = course;
};

//------------------------------------------------------------

// functions related to Cart ( addCourse, savetoLocal,removeCourse)
// all of them are prototypes as we will use (this)

Cart.prototype.addcourse = function (course) {
    let newCourse = new CartCourse(course);
    this.items.push(newCourse);
};
//------------------------------------------------------------
Cart.prototype.savetoLocalStorage = function () {
    localStorage.setItem('cart', JSON.stringify(this.items));
};
//--------------------------------------------------------
Cart.prototype.removeCourse = function (item) {
    this.items.splice(item, 1)
    // console.log('hi');
    // console.log(cart);
};
//---------------------------------------------------------

function corsesGenerat() {
    new Course('PMP', 'img/pmp-cert.png', '150')
    new Course('six segma', 'img/six-segma.jpg', '70')
    new Course('ACP', 'img/pmi-acp.png', '13')
    new Course('ITIL', 'img/itil.jpeg', '13')
    new Course('COBIT', 'img/ISACA_COBIT.png', '13')
    new Course('CEH', 'img/ceh.jpg', '13')
    new Course('CCNA', 'img/ccna.jpg', '13')
    new Course('Azure', 'img/azure.png', '13')
    new Course('AWS', 'img/aws.png', '13')
    new Course('CISM', 'img/cism.png', '15')
};

corsesGenerat()


