function outcome() {

    let num1 = Number(document.getElementById('firstNum').value)
    let num2 = Number(document.getElementById('secondNum').value)
    let total = null

    total += (document.getElementById('box1').checked) ? +(num1 + num2) : 0
    total += (document.getElementById('box2').checked) ? +(num1 - num2) : 0
    total += (document.getElementById('box3').checked) ? +(num1 * num2) : 0
    total += (document.getElementById('box4').checked) ? +(num1 / num2) : 0
    
    document.getElementById('resultArea').innerHTML = 'Result: ' + String(total)
}