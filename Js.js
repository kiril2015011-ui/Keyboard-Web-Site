// // function declaration
//
// function name(){
//     console.log(1)
// }
//
// // function expression
//
// const tm = function(){
//     console.log(2)
// }
//
// //  arrow function
//
// const tm2 = () => {console.log(3)}
let input = document.getElementById("Input")
let display = document.getElementById("DisplayAll")
let Btn = document.getElementById("OnBtn")

function Typing(type) {
    if (type == 'delete') {
        input.value = "";
        input.placeholder = "Нажмите на кнопки чтобы напечатать...";
    } else if (type == 'Admin') {
        display.style.opacity = 0;
        Btn.style.opacity = 1;
    } else if (type =='On') {
        display.style.opacity = 1;
        Btn.style.opacity = 0;
    } else if (type == 'Fn') {
        input.readOnly = false;
    } else if (type == 'FnF') {
        input.readOnly = true;
    } else {
        input.value += type;
    }


}

function Esc(body) {
    if (body == "true") {
        input.style.opacity = '0';
    } else {
        input.style.opacity = '1';
        input.placeholder = 'Хахаха';
    }
}

function Tema(body2) {
    if (body2 == "true") {
        display.style.background = "black";
    } else {
        display.style.background = "linear-gradient(to right, red, blue)";
    }
}