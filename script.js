


function buttonClicked(value){
    
    let display = document.getElementById('runningExpression')
    let expression = display.innerText + value
    return display.innerText = expression
}