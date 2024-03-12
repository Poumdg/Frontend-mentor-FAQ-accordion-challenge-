// Paragraphs variables
let p1= document.getElementById("p1");
let p2= document.getElementById("p2");
let p3= document.getElementById("p3");
let p4= document.getElementById("p4");

// PLus and minus variables
let plus1= document.getElementById("plus1");
let plus2= document.getElementById("plus2");
let plus3= document.getElementById("plus3");
let plus4= document.getElementById("plus4");

let minus1= document.getElementById("minus1");
let minus2= document.getElementById("minus2");
let minus3= document.getElementById("minus3");
let minus4= document.getElementById("minus4");

// Plus button function
function one() {
    p1.style.display= "block";
    minus1.style.visibility= "visible";
    plus1.style.visibility=" hidden";
}
function two() {
    p2.style.display= "block";
    minus2.style.visibility= "visible";
    plus2.style.visibility=" hidden";
    console.log(p2.innerHTML)
}
function three() {
    p3.style.display= "block";
    minus3.style.visibility= "visible";
    plus3.style.visibility=" hidden";
}
function four() {
    p4.style.display= "block";
    minus4.style.visibility= "visible";
    plus4.style.visibility=" hidden";
}
// Minus button function

function one_reverse() {
    p1.style.display= "none";
    minus1.style.visibility= "hidden";
    plus1.style.visibility=" visible";
}
function two_reverse() {
    p2.style.display= "none";
    minus2.style.visibility= "hidden";
    plus2.style.visibility=" visible";
}
function three_reverse() {
    p3.style.display= "none";
    minus3.style.visibility= "hidden";
    plus3.style.visibility=" visible";
}
function four_reverse() {
    p4.style.display= "none";
    minus4.style.visibility= "hidden";
    plus4.style.visibility=" visible";
}