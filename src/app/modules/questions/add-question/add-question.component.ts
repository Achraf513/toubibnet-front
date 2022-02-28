import {Component, OnInit} from '@angular/core';
import {Question} from "../../shared/models/Question";
import {QuestionService} from "../services/question.service";
import {Router} from "@angular/router";
import {TokenService} from "../../../token.service";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  id!: number;
  question = {} as Question;


  constructor(private questionService: QuestionService,
              private router: Router,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.id = this.tokenService.getUser()!.id;
  }

  add() {
    this.question.date=new Date();
    this.questionService.addQuestion(this.question, this.id).subscribe(data => {
      console.log(data)
      this.router.navigate(['/questions']);
    });

  }
}
