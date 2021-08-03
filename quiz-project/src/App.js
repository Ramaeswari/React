import './App.css';
import {useState} from 'react';

function App() {
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        {answerText: "New York", isCorrect: false},
        {answerText: "London", isCorrect: false},
        {answerText: "Paris", isCorrect: true},
        {answerText: "Dublin", isCorrect: false}
      ]
    },
    {
      questionText: "Who is the CEO of HCL?",
      answerOptions: [
        {answerText: "Shiv Nadar", isCorrect: false},
        {answerText: "C Vijaya Kumar", isCorrect: true},
        {answerText: "Roshini Nadar", isCorrect: false},
        {answerText: "Anant Gupta", isCorrect: false}
      ]
    },
    {
      questionText: "The iphone was created by which company?",
      answerOptions: [
        {answerText: "Apple", isCorrect: true},
        {answerText: "Intel", isCorrect: false},
        {answerText: "Amazon", isCorrect: false},
        {answerText: "Microsoft", isCorrect: false}
      ]
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        {answerText: '5', isCorrect: false},
        {answerText: '7', isCorrect: true},
        {answerText: '6', isCorrect: false},
        {answerText: '1', isCorrect: false}
      ]
    },
    {
      questionText: "What is the full form of DOM?",
      answerOptions: [
        {answerText: "Data Object Model", isCorrect: false},
        {answerText: "Document Object Model", isCorrect: true},
        {answerText: "Document Object Medium", isCorrect: false},
        {answerText: "Document Optimum Model", isCorrect: false}
      ]
    },
    {
      questionText: "Who maintains the React?",
      answerOptions: [
        {answerText: "Microsoft", isCorrect: false},
        {answerText: "Apple", isCorrect: false},
        {answerText: "Facebook", isCorrect: true},
        {answerText: "Google", isCorrect: false}
      ]
    },
    {
      questionText: "On which day did the World Wide Web go online?",
      answerOptions: [
        {answerText: "December 17, 1996", isCorrect: false},
        {answerText: "November 12, 1990", isCorrect: false},
        {answerText: "November 24, 1995", isCorrect: false},
        {answerText: "December 20, 1990", isCorrect: true}
      ]
    },
    {
      questionText: "HTML documents are saved in",
      answerOptions: [
        {answerText: "ASCII text", isCorrect: true},
        {answerText: "Special binary format", isCorrect: false},
        {answerText: "Machine language codes", isCorrect: false},
        {answerText: "None of above", isCorrect: false}
      ]
    },
    {
      questionText: "Where is the correct place to insert a JavaScript?",
      answerOptions: [
        {answerText: "The <head> section", isCorrect: false},
        {answerText: "The <body> section", isCorrect: false},
        {answerText: "The <footer>", isCorrect: false},
        {answerText: "Both the <head> section and the <body> section are correct", isCorrect: true}
      ]
    },
    {
      questionText: "How to write an IF statement in JavaScript?",
      answerOptions: [
        {answerText: " if i = 5 then", isCorrect: false},
        {answerText: "if i = 5", isCorrect: false},
        {answerText: " if (i == 5)", isCorrect: true},
        {answerText: "if i == 5 then", isCorrect: false}
      ]
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false)
  const [score, setScore] = useState(0)
  const handleAnswerButton = (isCorrect) => {
    if(isCorrect === true)
    {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if(nextQuestion < questions.length)
    {
      setCurrentQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    }
    
  }
  return (
    <div className="App">
      {showScore ? (
        <div className="score-section">You scored {score} out of {questions.length}</div>
      ) : (
        <>
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].questionText}</div>
        </div>
        <div className="answer-section">
          {questions[currentQuestion].answerOptions.map(answerOption => (
            <button onClick={() => handleAnswerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>
          ))}
        </div>
        </>
      )}
    </div>
  );
}

export default App;
