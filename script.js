const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: " Você estava indo pegar um lanche da tarde quando passou pelo espelho da sala e se deparou com uma figura totalmente diferente que costumava ver,qual seria sua reação e o que faria para mudar",

        alternativas: [
            {
                texto: "Ficaria espantado com o que vejo nos dias de hoje. ",
                afirmacao: "afirmação"
            },
            {
                texto: "Não ligaria e continuaria como estava!",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Com a resposta é obrigatório pensar que temos que mudar a vida que vivemos, como scha que seria a melhor alternativa",
        alternativas: [
            {
                texto: "Entrar em um academia sem preparo nenhum, com seus próprios treinos ",
                afirmacao: "afirmação"
            },
            {
                texto: "Procurar uma nutricionista para se preparar melhor, controlar alimentação e seguir treinos específicos dadp por profissional",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Como é o melhor método para emagrecer que você conhece nos dias de hoje",
        alternativas: [
            {
                texto: "Métodos apenas cirurgicos e sem certeza de acerto",
                afirmacao: "afirmação"
            },
            {
                texto: "Procurar emagrecer com dietas e acompanhamento médico adequado e seguro",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você pergunta para amigos como está sua aparência e pede que sejam sinceros com a resposta. Após o comentario negativo deles,você fica surpreso e qual seria sua reação  ",
        alternativas: [
            {
                texto: "Ficaria triste e me afastaria, pois não é a resposta não é a esperada ",
                afirmacao: "afirmação"
            },
            {
                texto: "Procuraria ouvir melhor seus conselhos e focar em mudar ",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Um amigo para te ajudar chama para treinarem juntos e focarem, qual seria a sua reação ",
        alternativas: [
            {
                texto: "Aceitaria,pois quero focar com meu futurov e ter uma vida ativa",
                afirmacao: "afirmação"
            },
            {
                texto: "Ficaria em dúvida por não querer treinar e focar na accademia",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();