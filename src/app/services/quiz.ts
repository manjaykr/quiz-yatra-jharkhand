import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private questions = [
    {
      question: 'What is the capital of Jharkhand?',
      options: ['Ranchi', 'Jamshedpur', 'Bokaro', 'Dhanbad'],
      answer: 'Ranchi',
    },
    {
      question: 'Which river flows through Jharkhand?',
      options: ['Ganga', 'Damodar', 'Narmada', 'Godavari'],
      answer: 'Damodar',
    },
  ];

  getQuestions() {
    return this.questions;
  }
}
