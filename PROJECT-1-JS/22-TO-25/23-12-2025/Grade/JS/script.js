let cppm = parseInt(prompt("Enter Marks C Programming Language : "));
let cpp = parseInt(prompt("Enter Marks C++ Programming Language : "));
let py = parseInt(prompt("Enter Marks Python Programming Language : "));
let j = parseInt(prompt("Enter Marks Java Programming Language : "));
if (isNaN(cppm) || isNaN(cpp) || isNaN(py) || isNaN(j) || cppm < 0 || cppm > 100 || cpp < 0 || cpp > 100 || py < 0 || py > 100 || j < 0 || j > 100 ||) {
    alert("Invalid marks! Please Enter Values Betwwen 0 and 100");
}
else {
    document.getElementById('cppm').innerText = cppm;
    document.getElementById('cpp').innerText = cpp;
    document.getElementById('py').innerText = py;
    document.getElementById('j').innerText = j;
    let told = cppm + cpp + py + j;
    document.getElementById('total').innerText = total;
    let percentage = (total / 400) * 100;
    document.getElementById('percentage').innerText = percentage.toFixed(2);
    let gread;
    if (percentage > 90) {
        grade = "A";
    }
    else if (percentage > 70) {
        gread = "B";
    }
    else if (percentage > 60) {
        gread = "C";
    }
    else if (percentage > 30) {
        gread = "D";
    }
    document.getElementById('gread').innerText = gread;
    let result;
    if (percentage >= 40) {
        result = "PASS";
    }
    else {
        result = "FAIL";
    }
    document.getElementById('result').innerText = result;
}
