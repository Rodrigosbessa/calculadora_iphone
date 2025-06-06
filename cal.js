let valorAtual = "";
let valorAnterior = "";
let operacao = "";
let igual = false;
let negative = false;
let first = true;

const display = document.getElementById("resultado");
const displayRest = document.getElementById("reset");

document.getElementById("reset").addEventListener("click", () => {
    if (first) {
        displayRest.textContent = "AC";
        display.value = 0;
        if (operacao === "+"){
            botaoMais.classList.add("ativo");
        } else if (operacao === "-"){
            botaoMenos.classList.add("ativo");
        } else if (operacao === "/"){
            botaoDividir.classList.add("ativo");
        } else if (operacao === "x"){
            botaoVezes.classList.add("ativo");
        }
        first = false;
    } else {
        valorAnterior = "";
        display.value = "0";
        operacao = "";
        document.querySelectorAll(".op-orange").forEach(botao => {
            botao.classList.remove("ativo");
        });
        displayRest.textContent = "AC";
    }
});

document.getElementById("change").addEventListener("click", () => {
    if(igual){
        valorAnterior = parseFloat(valorAnterior) * -1; 
        display.value = valorAnterior;
        return;
    }
    if (valorAtual != ""){
        valorAtual = parseFloat(valorAtual) * -1; 
        display.value = valorAtual;
    } else {
        valorAtual = "-0";
        display.value = valorAtual;
        negative = true;
    }
});

document.getElementById("percentagem").addEventListener("click", () => {
    if(valorAtual === "" && operacao != "" || igual){
        valorAnterior = parseFloat(valorAnterior) / 100;
        display.value = valorAnterior;
    } else {
        valorAtual = parseFloat(valorAtual) / 100;
        display.value = valorAtual;
    }
});


document.querySelectorAll(".tecla, .tecla-zero").forEach(botao => {
    botao.addEventListener("click", () => {
        if (!igual){
            if (negative || !first){
                valorAtual = "";
                valorAtual += botao.textContent;
                display.value = valorAtual;
                document.querySelectorAll(".op-orange").forEach(botao => {
                    botao.classList.remove("ativo");
                });
                negative = false
                first = true;
            } else {
                valorAtual += botao.textContent;
                display.value = valorAtual;
                document.querySelectorAll(".op-orange").forEach(botao => {
                    botao.classList.remove("ativo");
                });
            }
        } else {
            valorAtual = "";
            valorAnterior = "";
            igual = false;
            valorAtual += botao.textContent;
            display.value = valorAtual;
            document.querySelectorAll(".op-orange").forEach(botao => {
                botao.classList.remove("ativo");
            });
        }
        displayRest.textContent = "C";
    });
});

const botaoMais = document.getElementById("mais");
document.getElementById("mais").addEventListener("click", () => {
    document.querySelectorAll(".op-orange").forEach(botao => {
        botao.classList.remove("ativo");
    });
    botaoMais.classList.add("ativo");
    btn_op("+");
});

const botaoMenos = document.getElementById("menos");
document.getElementById("menos").addEventListener("click", () => {
    document.querySelectorAll(".op-orange").forEach(botao => {
        botao.classList.remove("ativo");
    });
    botaoMenos.classList.add("ativo");
    btn_op("-");
});

const botaoDividir = document.getElementById("dividir");
document.getElementById("dividir").addEventListener("click", () => {
    document.querySelectorAll(".op-orange").forEach(botao => {
        botao.classList.remove("ativo");
    });
    botaoDividir.classList.add("ativo");
    btn_op("/");
});

const botaoVezes = document.getElementById("vezes");
document.getElementById("vezes").addEventListener("click", () => {
    document.querySelectorAll(".op-orange").forEach(botao => {
        botao.classList.remove("ativo");
    });
    botaoVezes.classList.add("ativo");
    btn_op("x");
});

document.getElementById("igual").addEventListener("click", () => {
    document.querySelectorAll(".op-orange").forEach(botao => {
        botao.classList.remove("ativo");
    });
    if (valorAtual === ""){
        valorAtual = valorAnterior;
    }
    if (operacao === "+"){
        valorAnterior = parseFloat(valorAnterior) + parseFloat(valorAtual);
    }
    if (operacao === "-"){
        valorAnterior = parseFloat(valorAnterior) - parseFloat(valorAtual);
    }
    if (operacao === "/"){
        valorAnterior = parseFloat(valorAnterior) / parseFloat(valorAtual);
    }
    if (operacao === "x"){
        valorAnterior = parseFloat(valorAnterior) * parseFloat(valorAtual);
    }
    display.value = valorAnterior;
    igual = true;
});


function btn_op(op){
    if (valorAnterior === ""){
        valorAnterior = valorAtual;
        valorAtual = "";
    }
    if (valorAtual != "" && !igual){
        if (operacao === "+") {
            valorAnterior = parseFloat(valorAnterior) + parseFloat(valorAtual);
            display.value = valorAnterior;
        } else if (operacao === "-") {
            valorAnterior = parseFloat(valorAnterior) - parseFloat(valorAtual);
            display.value = valorAnterior;
        } else if (operacao === "/") {
            valorAnterior = parseFloat(valorAnterior) / parseFloat(valorAtual);
            display.value = valorAnterior;
        } else if (operacao === "x") {
            valorAnterior = parseFloat(valorAnterior) * parseFloat(valorAtual);
            display.value = valorAnterior;
        }
    }
    igual = false;
    valorAtual = "";
    operacao = op;
}