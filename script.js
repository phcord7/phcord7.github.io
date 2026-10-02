const banco = [

  {
    pergunta: "O Naturalismo é considerado uma vertente mais radical de qual movimento?",
    opcoes: [
      "Realismo",
      "Romantismo",
      "Humanismo",
      "Parnasianismo"
    ],
    resposta: "Realismo"
  },

  {
    pergunta: "Qual característica é fundamental no Naturalismo?",
    opcoes: [
      "Determinismo",
      "Idealização amorosa",
      "Fantasia",
      "Religiosidade"
    ],
    resposta: "Determinismo"
  },

  {
    pergunta: "Qual autor é um dos principais representantes do Naturalismo brasileiro?",
    opcoes: [
      "Aluísio Azevedo",
      "Olavo Bilac",
      "José de Alencar",
      "Gil Vicente"
    ],
    resposta: "Aluísio Azevedo"
  },

  {
    pergunta: "Qual obra é um dos maiores exemplos do Naturalismo brasileiro?",
    opcoes: [
      "O Cortiço",
      "Iracema",
      "Dom Casmurro",
      "Os Lusíadas"
    ],
    resposta: "O Cortiço"
  },

  {
    pergunta: "No Naturalismo, o comportamento humano é influenciado principalmente por:",
    opcoes: [
      "Hereditariedade, ambiente e meio social",
      "Sonhos e fantasias",
      "Idealização amorosa",
      "Religião e fé"
    ],
    resposta: "Hereditariedade, ambiente e meio social"
  },

  {
    pergunta: "O Naturalismo recebeu forte influência de:",
    opcoes: [
      "Ciência e teorias deterministas",
      "Mitologia grega",
      "Religiosidade medieval",
      "Romantismo europeu"
    ],
    resposta: "Ciência e teorias deterministas"
  },

  {
    pergunta: "Como o Naturalismo costuma representar o ser humano?",
    opcoes: [
      "Influenciado pelo ambiente e pela hereditariedade",
      "Como um ser sempre perfeito",
      "Como um herói idealizado",
      "Como alguém guiado apenas pelos sentimentos"
    ],
    resposta: "Influenciado pelo ambiente e pela hereditariedade"
  },

  {
    pergunta: "Qual elemento recebe grande importância nas obras naturalistas?",
    opcoes: [
      "O meio social",
      "A fantasia",
      "O mundo sobrenatural",
      "A idealização da natureza"
    ],
    resposta: "O meio social"
  },

  {
    pergunta: "O Naturalismo busca apresentar a realidade de maneira:",
    opcoes: [
      "Objetiva e detalhada",
      "Idealizada e fantasiosa",
      "Romântica e sentimental",
      "Mágica e sobrenatural"
    ],
    resposta: "Objetiva e detalhada"
  },

  {
    pergunta: "Qual conceito está diretamente relacionado ao Naturalismo?",
    opcoes: [
      "Determinismo",
      "Idealismo",
      "Subjetivismo",
      "Medievalismo"
    ],
    resposta: "Determinismo"
  },

  {
    pergunta: "No Naturalismo, o ambiente pode:",
    opcoes: [
      "Influenciar o comportamento das personagens",
      "Ser apenas um cenário",
      "Representar sempre um lugar perfeito",
      "Criar fantasia"
    ],
    resposta: "Influenciar o comportamento das personagens"
  },

  {
    pergunta: "As personagens naturalistas são frequentemente influenciadas por:",
    opcoes: [
      "Instintos e condições sociais",
      "Príncipes e cavaleiros",
      "Seres sobrenaturais",
      "Ideais de perfeição"
    ],
    resposta: "Instintos e condições sociais"
  },

  {
    pergunta: "Qual alternativa apresenta uma característica naturalista?",
    opcoes: [
      "Crítica às condições sociais",
      "Idealização do amor",
      "Exaltação da fantasia",
      "Valorização da vida medieval"
    ],
    resposta: "Crítica às condições sociais"
  },

  {
    pergunta: "O Naturalismo buscava observar o ser humano de forma semelhante a uma investigação:",
    opcoes: [
      "Científica",
      "Mitológica",
      "Religiosa",
      "Fantástica"
    ],
    resposta: "Científica"
  },

  {
    pergunta: "Qual obra apresenta a influência do ambiente e das condições sociais sobre seus personagens?",
    opcoes: [
      "O Cortiço",
      "Os Lusíadas",
      "Iracema",
      "A Moreninha"
    ],
    resposta: "O Cortiço"
  },

  {
    pergunta: "Qual alternativa NÃO é característica do Naturalismo?",
    opcoes: [
      "Idealização amorosa",
      "Determinismo",
      "Influência do meio",
      "Observação da realidade"
    ],
    resposta: "Idealização amorosa"
  },

  {
    pergunta: "Qual obra marcou o início do Naturalismo no Brasil?",
    opcoes: [
      "O Mulato",
      "O Cortiço",
      "Dom Casmurro",
      "Memórias Póstumas de Brás Cubas"
    ],
    resposta: "O Mulato"
  },

  {
    pergunta: "Qual fator é importante para explicar o comportamento das personagens naturalistas?",
    opcoes: [
      "Hereditariedade",
      "Magia",
      "Destino divino",
      "Imaginação"
    ],
    resposta: "Hereditariedade"
  },

  {
    pergunta: "Qual movimento valoriza a perfeição formal e a 'arte pela arte'?",
    opcoes: [
      "Parnasianismo",
      "Naturalismo",
      "Humanismo",
      "Romantismo"
    ],
    resposta: "Parnasianismo"
  },

  {
    pergunta: "Gil Vicente é um dos principais representantes de qual movimento?",
    opcoes: [
      "Humanismo",
      "Naturalismo",
      "Parnasianismo",
      "Realismo"
    ],
    resposta: "Humanismo"
  }

];


let perguntas = [];
let atual = 0;
let pontos = 0;
let nome = "";


function embaralhar(array) {
  return array.sort(() => Math.random() - 0.5);
}


function iniciarQuiz() {

  nome = document
    .getElementById("nome")
    .value
    .trim();

  if (nome === "") {
    alert("Digite um apelido para começar!");
    return;
  }

  perguntas = embaralhar([...banco]).map(function(pergunta) {

    return {
      pergunta: pergunta.pergunta,
      resposta: pergunta.resposta,
      opcoes: embaralhar([...pergunta.opcoes])
    };

  });

  atual = 0;
  pontos = 0;

  document
    .getElementById("inicio")
    .classList
    .add("escondido");

  document
    .getElementById("resultado")
    .classList
    .add("escondido");

  document
    .getElementById("quiz")
    .classList
    .remove("escondido");

  mostrarPergunta();
}


function mostrarPergunta() {

  const p = perguntas[atual];

  document
    .getElementById("numero")
    .textContent =
    "Pergunta " + (atual + 1) + "/20";

  document
    .getElementById("pontos")
    .textContent =
    "⭐ " + pontos;

  document
    .getElementById("progresso")
    .style
    .width =
    ((atual + 1) / 20 * 100) + "%";

  document
    .getElementById("pergunta")
    .textContent =
    p.pergunta;


  const area =
    document.getElementById("opcoes");

  area.innerHTML = "";


  p.opcoes.forEach(function(opcao) {

    const botao =
      document.createElement("div");

    botao.className = "opcao";

    botao.textContent = opcao;

    botao.onclick = function() {
      responder(botao, opcao);
    };

    area.appendChild(botao);

  });


  document
    .getElementById("proxima")
    .classList
    .add("escondido");
}


function responder(botao, escolha) {

  const correta =
    perguntas[atual].resposta;

  const botoes =
    document.querySelectorAll(".opcao");


  botoes.forEach(function(b) {

    b.style.pointerEvents = "none";

  });


  if (escolha === correta) {

    botao.classList.add("correta");

    pontos++;

  } else {

    botao.classList.add("errada");


    botoes.forEach(function(b) {

      if (b.textContent === correta) {

        b.classList.add("correta");

      }

    });

  }


  document
    .getElementById("pontos")
    .textContent =
    "⭐ " + pontos;


  document
    .getElementById("proxima")
    .classList
    .remove("escondido");
}


function proximaPergunta() {

  atual++;


  if (atual >= perguntas.length) {

    finalizar();

  } else {

    mostrarPergunta();

  }
}


function finalizar() {

  document
    .getElementById("quiz")
    .classList
    .add("escondido");

  document
    .getElementById("resultado")
    .classList
    .remove("escondido");


  document
    .getElementById("pontuacao")
    .textContent =
    pontos + "/20";


  if (pontos >= 16) {

    document
      .getElementById("mensagem")
      .textContent =
      "Mandou muito bem, " + nome + "! 🏆";

  } else if (pontos >= 10) {

    document
      .getElementById("mensagem")
      .textContent =
      "Boa, " + nome + "! Você está no caminho certo. 📚";

  } else {

    document
      .getElementById("mensagem")
      .textContent =
      "Continue estudando, " + nome + "! 💜";

  }

}