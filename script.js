// This function clear all the values
function clearScreen() {
    document.getElementById("calc").value = "";
}

// This function display values
function display(value) {
    document.getElementById("calc").value += value;
}

function back() {
    var value = document.getElementById("calc").value;
    document.getElementById("calc").value = value.substr(0, value.length - 1);
}

// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("calc").value;
    var q = eval(p);
    document.getElementById("calc").value = q;
}

function percentage() {
    var p = document.getElementById("calc").value;
    var q = (p / 100);
    document.getElementById("calc").value = q;
}

function plusminus() {
    var p = document.getElementById("calc").value;
    var q = p * -1;
    document.getElementById("calc").value = q;
}

function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('dark', !wasDarkmode);
}

// function darkmode() {
// all values retrieved from localStorage will be strings

// const element = document.body;
// element.classList.toggle('dark-mode', !wasDarkmode);
//   }

function onload() {
    document.body.classList.toggle('dark', localStorage.getItem('darkmode') === 'true');
}


function changeImage() {
    var Image_Id = document.getElementById('imgClickandChange');
    if (Image_Id.src.match("https://img.icons8.com/fluency-systems-regular/24/000000/crescent-moon.png")) {
        Image_Id.src = "sun-24.ico";
    } else {
        Image_Id.src = "https://img.icons8.com/fluency-systems-regular/24/000000/crescent-moon.png";
    }
}