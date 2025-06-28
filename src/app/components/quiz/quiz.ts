import { Component } from '@angular/core';
import { QuizService } from '../../services/quiz';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './quiz.html',
  styleUrl: './quiz.css',
})
export class Quiz {
  questions: any[] = [];
  currentQuestion = 0;
  score = 0;
  showResult = false;
  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
    this.questions = this.quizService.getQuestions();
  }

  answer(option: string) {
    if (option === this.questions[this.currentQuestion].answer) {
      this.score++;
    }

    this.currentQuestion++;
    if (this.currentQuestion >= this.questions.length) {
      this.showResult = true;
    }
  }

  restart() {
    this.currentQuestion = 0;
    this.score = 0;
    this.showResult = false;
  }
}
