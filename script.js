


function buttonClicked(value){
    
    let display = document.getElementById('total')
    let expression = display.innerText
    
    if (value == 'C'){
        expression = ''
    }
    else if(value == "⌫"){
    expression = expression.slice(0,-1)
    }
    else if (value == '='){
        expression = eval(expression)
    } else{
        expression =  expression + value
    }   
    return display.innerText = expression
}

    
