import React, { useState } from 'react';
import './Quiz.css'; // Importa os estilos do Quiz

  const questions = [
    {
      question: "Qual é a função do advérbio em uma frase?",
      options: ["Determinar o sujeito", "Modificar um verbo, adjetivo ou outro advérbio", "Substituir o objeto direto", "Indicar o tempo verbal"],
      answer: "Modificar um verbo, adjetivo ou outro advérbio",
    },
    {
      question: "Qual das palavras abaixo está escrita corretamente?",
      options: ["Ezitar", "Excessão", "Exceção", "Enxagero"],
      answer: "Exceção",
    },
    {
      question: "Em que tempo está o verbo na frase: 'Eu viajarei amanhã'?",
      options: ["Presente", "Pretérito perfeito", "Futuro do presente", "Pretérito mais-que-perfeito"],
      answer: "Futuro do presente",
    },
    {
      question: "Qual é a forma correta do plural de 'cidadão'?",
      options: ["Cidadões", "Cidadãos", "Cidades", "Cidadães"],
      answer: "Cidadãos",
    },
    {
      question: "Qual é o resultado de 7 × 8?",
      options: ["54", "56", "64", "72"],
      answer: "56",
    },
    {
      question: "Qual é o valor de x na equação 2x + 3 = 11?",
      options: ["2", "3", "4", "5"],
      answer: "4",
    },
    {
      question: "Se um triângulo tem lados com medidas de 3 cm, 4 cm e 5 cm, que tipo de triângulo ele é?",
      options: ["Equilátero", "Isósceles", "Retângulo", "Escaleno"],
      answer: "Retângulo",
    },
    {
      question: "Qual é o valor de √64?",
      options: ["6", "7", "8", "9"],
      answer: "8",
    },
    {
      question: "Qual é o maior país do mundo em extensão territorial?",
      options: ["Canadá", "Estados Unidos", "China", "Rússia"],
      answer: "Rússia",
    },
    {
      question: "O Rio Amazonas está localizado em qual continente?",
      options: ["África", "América do Sul", "Ásia", "Europa"],
      answer: "América do Sul",
    },
    {
      question: "Qual é o oceano que banha a costa leste do Brasil?",
      options: ["Oceano Pacífico", "Oceano Atlântico", "Oceano Índico", "Oceano Ártico"],
      answer: "Oceano Atlântico",
    },
    {
      question: "Qual dos países abaixo NÃO faz parte da União Europeia?",
      options: ["França", "Alemanha", "Noruega", "Espanha"],
      answer: "Noruega",
    },
    {
      question: "Em que ano ocorreu a Proclamação da República no Brasil?",
      options: ["1822", "1889", "1891", "1910"],
      answer: "1889",
    },
    {
      question: "Quem foi o primeiro imperador do Brasil?",
      options: ["Dom Pedro I", "Dom Pedro II", "Tiradentes", "José Bonifácio"],
      answer: "Dom Pedro I",
    },
    {
      question: "Qual foi o principal objetivo das Grandes Navegações Europeias?",
      options: ["Espalhar o cristianismo", "Encontrar novas rotas comerciais", "Expandir territórios", "Desenvolver novas tecnologias"],
      answer: "Encontrar novas rotas comerciais",
    },
    {
      question: "Qual foi a primeira civilização a desenvolver um sistema de escrita?",
      options: ["Egípcios", "Chineses", "Sumérios", "Romanos"],
      answer: "Sumérios",
    },
    {
      question: "Qual é a principal função do sistema respiratório?",
      options: ["Produzir energia", "Transportar nutrientes", "Absorver oxigênio e eliminar dióxido de carbono", "Regular a temperatura corporal"],
      answer: "Absorver oxigênio e eliminar dióxido de carbono",
    },
    {
      question: "Qual é o estado físico da água a 0ºC?",
      options: ["Gasoso", "Sólido", "Líquido", "Plasma"],
      answer: "Sólido",
    },
    {
      question: "Qual órgão do corpo humano é responsável por bombear sangue?",
      options: ["Cérebro", "Pulmão", "Fígado", "Coração"],
      answer: "Coração",
    },
    {
      question: "O que é fotossíntese?",
      options: ["Processo de respiração das plantas", "Produção de oxigênio pelas plantas", "Processo pelo qual as plantas produzem seu alimento", "Captação de energia solar pelos animais"],
      answer: "Processo pelo qual as plantas produzem seu alimento",
    }
  ];


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizFinished(true);
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setIsQuizFinished(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div>
          <h2>Você acertou {score} de {questions.length} perguntas</h2>
          <button className="restart-button" onClick={handleRestart}>Reiniciar</button>
        </div>
      ) : (
        <div>
          <h1>Quiz</h1>
          {isQuizFinished ? (
            <h2>Fim do Quiz!</h2>
          ) : (
            <>
              <h2>{questions[currentQuestion].question}</h2>
              {questions[currentQuestion].options.map((option) => (
                <button key={option} onClick={() => handleOptionClick(option)} className="option-button">
                  {option}
                </button>
              ))}
            </>
          )}
          {currentQuestion < questions.length - 1 && (
            <button className="next-button" onClick={() => setCurrentQuestion(currentQuestion + 1)}>
              Próxima Pergunta
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;