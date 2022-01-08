

document.getElementById("weight");var form = document.getElementById("form");
validateForm = () => {    if (age.value == '' || height.value == '' || weight.value == '') {        alert("All fields are required!");        document.getElementById("submit").removeEventListener("click", countBmi);    } else {        countBmi();    }} 
document.getElementById("submit").addEventListener("click", validateForm);
countBmi = () => {    var p = [age.value, height.value, weight.value];    form.reset();    var bmi = Number(p[2]) / (Number(p[1]) / 100 * Number(p[1]) / 100);
    var result = '';    if (bmi < 18.5) {        result = 'Oops! You are underwieght. You gotta add pounds on healthfully 😅!';    } else if (18.5 <= bmi && bmi <= 24.9) {        result = 'Yay! you are healthy. You can eat a pizza or two 😎! (Pls dont take that literally!)';    } else if (25 <= bmi && bmi <= 29.9) {        result = 'You gotta  cut down on your unhealthyfood/manners & you will be perfectly healthy ☺!';    } else if (30 <= bmi && bmi <= 34.9) {        result = 'Oops! It might be high time you train your brain to HATE junk food 😨!';    } else if (35 <= bmi) {        result = '🛑OBESITY ALERT🛑 No more junk i would say ❌🍔';    }
    var h1 = document.createElement("h1");    var h2 = document.createElement("h2");    var p = document.createElement("p");
    var t = document.createTextNode(result);    var b = document.createTextNode('BMI: ');    var r = document.createTextNode(parseFloat(bmi).toFixed(2));
    h1.appendChild(b);    h1.appendChild(r);    p.appendChild(t);
    document.body.appendChild(h1);    document.body.appendChild(p);    document.getElementById("submit").removeEventListener("click", countBmi);    document.getElementById("submit").removeEventListener("click", validateForm);} 
    document.getElementById("submit").addEventListener("click", countBmi);




