'use strict';

const STORE = {


  questions: [

    {
      question: 'What does HTML stand for?',
      answers: [
        'How to Make Lunch',
        'Hyper Text Makeup Language',
        'Hyper Tone Markup Language',
        'Hyper Text Markup Language'
      ],
      correctAnswer: 'Hyper Text Markup Language'

    },
    {
      question: 'jQuery is a:',
      answers: [
        'Javascript Framework',
        'Media Query',
        'Javascript Library',
        'Function'
      ],
      correctAnswer: 'Javascript Library'
    },
    {
      question: 'What is OOP?',
      answers: [
        "Optional Object Parameter",
        "Over Objective Programming",
        "Object Oriented Programming",
        "Open Objective Parameter"
      ],
      correctAnswer: 'Object Oriented Programming'
    },
    {
      question: "What type of programming language is Javascript?",
      answers: [
        "Procedural",
        "Functional",
        "Object Oriented",
        "Database"
      ],
      correctAnswer: 'Object Oriented'
    },
    {
      question: "What type of programming language is Python?",
      answers: [
        "Database",
        "Procedural",
        "Functional",
        "Object Oriented"

      ],
      correctAnswer: 'Database',
      }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  wrong: 0,
  right: 0
}
