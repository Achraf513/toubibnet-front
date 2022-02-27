import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../services/question.service";
import {Question} from "../../shared/models/Question";
import {AnswerService} from "../services/answer.service";
import {Answer} from "../../shared/models/Answer";
import {TokenService} from "../../../token.service";
import {DoctorsService} from "../../clients/doctors.service";

@Component({
  selector: 'app-questions-details',
  templateUrl: './questions-details.component.html',
  styleUrls: ['./questions-details.component.css']
})
export class QuestionsDetailsComponent implements OnInit {
  id!: number;
  question!: Question;
  answers!: Answer[];
  answer: Answer = {doctor: {}, question: {}} as Answer;
  comment!: string;
  confirmButton = "Add Comment";
  idAnswerToEdit!: number;
  currentUserId!: number;
  isDataFound!: boolean;
  isADoctor!: boolean;

  constructor(private activatedRoute: ActivatedRoute, private questionService: QuestionService,
              private answerService: AnswerService, private tokenService: TokenService,
              private doctorService: DoctorsService) {
  }

  ngOnInit(): void {
    this.currentUserId = this.tokenService.getUser()!.id;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.questionService.getQuestion(this.id).subscribe(data => {
      this.question = data;
    })
    this.getAnswers();
    this.isDoctor();
  }

  getAnswers() {
    this.answerService.getByQuestion(this.id).subscribe(data => {
      this.answers = data;
      if (data.length !== 0) {
        this.isDataFound = true;
        console.log(this.isDataFound);
      } else {
        this.isDataFound = false;
        console.log(this.isDataFound);
      }
    });
  }

  confirm() {
    this.answer.date = new Date();
    this.answer.doctor.id = this.currentUserId;
    this.answer.question.id = this.id;
    this.answer.description = this.comment;
    console.log(this.answer);
    if (this.confirmButton == "Add Comment") {
      this.answerService.add(this.answer).subscribe(data => {
          this.getAnswers();
          this.comment="";
          console.log(data);
        }
      );
    } else {
      this.answer.id = this.idAnswerToEdit;
      this.answerService.update(this.answer).subscribe(data => {
          this.getAnswers();
          console.log(data);
          this.comment = "";
          this.confirmButton = "Add Comment";
        }
      );
    }
  }

  delete(answer: Answer) {
    this.answerService.delete(answer.id).subscribe(data => {
      this.getAnswers();
      console.log(data);
    });
  }

  edit(answer: Answer) {
    this.confirmButton = "Update Comment";
    this.comment = answer.description;
    this.idAnswerToEdit = answer.id;
  }

  isDoctor() {
    this.doctorService.getDoctor(this.tokenService.getUser()!.id).subscribe(data => {
      if (data !== null)
        this.isADoctor = true;
      else
        this.isADoctor = false;
    });
  }
}
