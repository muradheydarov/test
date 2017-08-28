var obj = new Object();
obj.x = "Murad";
console.log(obj.x)

var arr = Array(1, 2, 3, 5);
console.log(arr[2])

var fun = new Function("x", "y", "return x+y;")
console.log(fun(5, 6))

var tor = function (params) {
    //alert("hello")   
}
tor()

function Cons(x, y) {
    this.x = x,
        this.y = y
}

var firstObj = new Cons(2, 5)

console.log(firstObj.x)

class Tor {
    constructor(name) {
        this.firstName = name;
        this.func = function () {
            console.log(this.firstName);
        };
    }
}

var tor = new Tor("Murad");
console.log(tor.firstName)
tor.func()

var objA = {
    name: "Murad",
    surname: "Heydarov"
}

console.log(objA.name + " " + objA.surname)

var constru = function (name, surname) {
    this.name = name,
        this.surname = surname
    this.func = function () {
        console.log(this.name + " " + this.surname)
    }
}

var Murad = new constru("Murad", "Heydarov")
Murad.func();

class Toraman {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.func = () => {
            console.log(this.name + " " + this.surname)
        }
    }
}
var toraman = new Toraman("Hesen", "Hesenov");
toraman.func();
// -----------------------------------------------------------

var rect = function (w, h) {
    this.width = w;
    this.height = h;    
}

rect.prototype.getArea = function () {
    console.log(this.width * this.height)
}
rect.prototype.name = "Hesen";

var Rect = new rect(5,10);
Rect.name = "Murad"
console.log(Rect.name);

var Rect2 = new rect(10,20);
console.log(Rect2.name);