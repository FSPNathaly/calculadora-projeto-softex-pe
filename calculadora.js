const prompt = require('prompt-sync')();

function calculadora() {
    let continuar = 's';

    while (continuar.toLowerCase() === 's') {
        const operacao = prompt('Qual operação você deseja realizar? (+, -, *, /): ');
        const numero1 = parseFloat(prompt('Digite o primeiro número: '));
        const numero2 = parseFloat(prompt('Digite o segundo número: '));

        let resultado;

        if (operacao === '+') {
            resultado = numero1 + numero2;
        } else if (operacao === '-') {
            resultado = numero1 - numero2;
        } else if (operacao === '*') {
            resultado = numero1 * numero2;
        } else if (operacao === '/') {
            resultado = numero1 / numero2;
        } else {
            console.log('Operação inválida.');
            continue;
        }

        console.log(`O resultado é: ${resultado}`);

        continuar = prompt('Deseja fazer outra operação? (s/n): ');
    }

    console.log('Calculadora encerrada.');
}

calculadora();