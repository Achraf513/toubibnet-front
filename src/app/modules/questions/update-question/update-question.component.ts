import {Component, OnInit} from '@angular/core';
import {Question} from "../../shared/models/Question";
import {ActivatedRoute, Router} from "@angular/router";
import {QuestionService} from "../services/question.service";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  question  ={} as Question;
  id!:number;
  items!: SelectItem[];
  selectedCategory: SelectItem = {value: 0};
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private questionService: QuestionService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.questionService.getById(this.id).subscribe(data => {
      this.question = data;
      this.getCategories();
    });
  }
  getCategories() {
    this.items = [];
    this.questionService.getCategories().subscribe(data => {
      this.selectedCategory = {label: this.question.category, value: data.indexOf(this.question.category)}
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        this.items.push({label: data[i], value: i});
      }
    });
    console.log(this.items);
  }

  update() {
    if (this.selectedCategory.label != null) {
      this.question.category = this.selectedCategory.label;
    }
    this.questionService.update(this.question).subscribe(data => {
      console.log(data)
      this.router.navigate(['/questions']);
    });
  }
}
