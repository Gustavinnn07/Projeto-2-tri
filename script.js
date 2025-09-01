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
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "afirmação"
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "afirmação"
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
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