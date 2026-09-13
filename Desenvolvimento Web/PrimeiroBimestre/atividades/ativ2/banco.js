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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("==== Banco Digital =====")
    console.log("1 - Consultar dados da Conta")
    console.log("2 - Consultar saldo")
    console.log("3 - Fazer débito")
    console.log("4 - Fazer crédito")
    console.log("5 - Sair")
}

function perguntarOpcao() {
    rl.question('Digite a opção desejada: ', (resposta) => {

        if (resposta === "1") {
            console.log("\nSeu nome é: " + nome +
                "\nSua agência é: " + agencia +
                "\nSua conta é: " + conta)
            perguntarOpcao();

        } else if (resposta === "2") {
            console.log(`Meu saldo é de ${formatarMoeda(meuSaldo)}`);
            perguntarOpcao();

        } else if (resposta === "3") {
            rl.question('Digite o valor para ser debitado: ', (respostaDebito) => {
                const debito = parseFloat(respostaDebito);
                meuSaldo = meuSaldo - debito;
                console.log(`Seu saldo atualizado é de: ${formatarMoeda(meuSaldo)}`);
                perguntarOpcao();
            });

        } else if (resposta === "4") {
            rl.question('Digite o valor para ser creditado: ', (respostaCredito) => {
                const credito = parseFloat(respostaCredito);
                meuSaldo = meuSaldo + credito;
                console.log(`Seu saldo atualizado é de: ${formatarMoeda(meuSaldo)}`);
                perguntarOpcao();
            });

        } else if (resposta === "5") {
            console.log("Encerrando Banco Digital...");
            rl.close();

        } else {
            console.log("Opção inválida! Por favor, digite outra opção.")
            perguntarOpcao();
        }
    });
}

mostrarMenu();
perguntarOpcao();
