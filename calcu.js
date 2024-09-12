function calcula() {
    const num1 = parseFloat(document.getElementById('zeroum').value);
    const num2 = parseFloat(document.getElementById('zerodois').value);
    let resultado = 0;
    let oper = document.querySelector('input[name="operacao"]:checked').value;

    if(oper == 'soma'){
        resultado = num1 + num2;
    }else if(oper == 'subtracao'){
        resultado = num1 - num2;
    }else if(oper == 'multiplicacao'){
        resultado = num1 * num2;
    }else if(oper == 'divisao'){
        resultado = num1/num2;
    }else if(oper == 'porcentagem'){
        resultado = num1*num2/100;
    }

    document.getElementById('resultado').innerText = resultado;
}