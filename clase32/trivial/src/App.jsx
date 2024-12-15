import { useState } from "react";
import questions from "./assets/data/questions";

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Función para manejar la selección de respuestas
  const handleAnswerChange = (questionIndex, selectedAnswer) => {
    // Guardar la respuesta seleccionada
    setSelectedAnswers((prevAnswers) => {
      const updatedAnswers = [...prevAnswers];
      updatedAnswers[questionIndex] = selectedAnswer;
      return updatedAnswers;
    });
  };

  // Función para verificar si la respuesta es correcta
  const isAnswerCorrect = (questionIndex, selectedAnswer) => {
    const correctAnswer = questions[questionIndex].answers.find(
      (answer) => answer.isRight
    );
    return selectedAnswer === correctAnswer.txt;
  };

  // Función para manejar el avance de la pregunta
  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  // Verificar si el juego ha terminado (todas las preguntas respondidas correctamente)
  const checkIfGameWon = () => {
    if (selectedAnswers.length === questions.length) {
      alert("¡Felicidades, ganaste el juego!");
    }
  };

  // Verificar si hemos llegado al final de las preguntas
  if (currentQuestionIndex >= questions.length) {
    checkIfGameWon();
  }

  const shuffled = shuffleArray(questions);
  return (
    <div>
      {shuffled.map((question, index) => {
        if (index === currentQuestionIndex) {
          return (
            <div key={index}>
              <h3>{question.question}</h3>
              <img src={question.img} width={50} alt="question" />
              <ul>
                {question.answers.map((answer, i) => (
                  <li key={i}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={answer.txt}
                      id={answer.txt}
                      disabled={selectedAnswers[index] !== undefined} // Desactivar si ya fue respondida
                      onChange={() => handleAnswerChange(index, answer.txt)}
                    />
                    {answer.txt}
                  </li>
                ))}
              </ul>
              {/* Mostrar el botón de siguiente pregunta solo si la respuesta es correcta */}
              {selectedAnswers[index] &&
                isAnswerCorrect(index, selectedAnswers[index]) && (
                  <button onClick={goToNextQuestion}>Siguiente pregunta</button>
                )}
              {/* Mostrar un mensaje si la respuesta es incorrecta */}
              {selectedAnswers[index] &&
                !isAnswerCorrect(index, selectedAnswers[index]) && (
                  <p style={{ color: "red" }}>
                    Respuesta incorrecta, intenta nuevamente.
                  </p>
                )}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
}

export default App;

export const shuffleArray = (array) => {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
};
