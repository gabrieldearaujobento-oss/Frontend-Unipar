// Importa o módulo readline
const readline = require('readline');

function formatarMoeda(valor) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(valor);
}

const nome = "Gabriel";
const agencia = 3333;
const conta = 4444;
let meuSaldo = 1000;

// Configura a interface de entrada e saída
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});

console.log("==== Banco Digital =====")
console.log("1 - Consultar dados da Conta")
console.log("2 - Consultar saldo")
console.log("3 - Fazer débito")
console.log("4 - Fazer crédito")
console.log("5 - Sair")

// Exemplo de como fazer uma pergunta
 rl.question('Digite a opção desejada: ', (resposta) => {

    if(resposta == "1") {
        console.log("\nSeu nome é: " + nome +
            "\nSua agência é: " + agencia +
            "\nSua conta é: " + conta)
    } if (resposta == "2") {
        console.log(`Meu saldo é de ${formatarMoeda(meuSaldo)}`);
    } if (resposta == "3") {
        rl.question('Digite o valor para ser débitado: ', (respostaDebito) => {
            const debito = parseFloat(respostaDebito);
            meuSaldo = meuSaldo - debito;
            console.log(`Seu saldo atualizado é de: ${formatarMoeda(meuSaldo)}`);
        }); if (resposta == "4") {
            
        }
    }
// Se for pedir um valor financeiro, lembre-se de converter a string para número!
// Exemplo: const valor = parseFloat(resposta);

// Para fechar o programa quando terminar, use:
//  rl.close();
});

// console.log(`Meu saldo é de ${formatarMoeda(meuSaldo)}`);    