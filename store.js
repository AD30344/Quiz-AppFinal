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
      correctAnswer: 'Hyper Text Markup Language',
      variables: {
        name: 'html',
        
      }

    },
    {
      question: 'jQuery is a:',
      answers: [
        'Javascript Framework',
        'Media Query',
        'Javascript Library',
        'Function'
      ],
      correctAnswer: 'Javascript Library',
      variables: {
        name: 'jquery',
       

      }
    },
    {
      question: 'What is OOP?',
      answers: [
        "Optional Object Parameter",
        "Over Objective Programming",
        "Object Oriented Programming",
        "Open Objective Parameter"
      ],
      correctAnswer: 'Object Oriented Programming',
      variables: {
        name: 'oop',
        
      }
    },
    {
      question: "What type of programming language is Javascript?",
      answers: [
        "Procedural",
        "Functional",
        "Object Oriented",
        "Database"
      ],
      correctAnswer: 'Object Oriented',
      variables: {
        name: 'js',
       

      }
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
      variables: {
        name: 'python',
        

      }
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
}