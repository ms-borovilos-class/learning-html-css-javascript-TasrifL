function buttonAlert() {
    alert("This is an alert")
}

function additon(a, b){
    alert(a + b)
}

function subtraction(a, b) {
    alert(a - b)
}

function multiplication(a, b){
    alert(a * b)
}

function division(a, b){
    alert(a / b)
}

function calculator() {  var operation = prompt("Enter an operation")
var a = promt("Enter your first number")
var b = promt("Enter your second number")

if (operation = "addition")
additon(a, b)
else if (operation === "subtraction"){
    alert(subtration(a, b))
} else if (operation === "multiplication"){
    alert(multiplication(a, b))  
} else if (operation === "division"){
    alert(division(a, b))
} else
("Ivalid operation")   
}
  