import {Component, OnInit} from '@angular/core';
import {Question} from "../../shared/models/Question";
import {QuestionService} from "../services/question.service";
import {Router} from "@angular/router";
import {TokenService} from "../../../token.service";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  id!: number;
  question = {} as Question;
  items!: SelectItem[];
  selectedCategory!: SelectItem;

  constructor(private questionService: QuestionService,
              private router: Router,
              private tokenService: TokenService) {
  }

  ngOnInit(): void {
    this.id = this.tokenService.getUser()!.id;
    this.getCategories();
  }

  getCategories() {
    this.items = [];
    this.questionService.getCategories().subscribe(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        this.items.push({label: data[i], value: i});
      }
    });
    console.log(this.items);

  }

  add() {
    console.log(this.selectedCategory);
    if (this.selectedCategory.label != null) {
      this.question.category = this.selectedCategory.label;
    }
    this.questionService.add(this.question, this.id).subscribe(data => {
      console.log(data)
      this.router.navigate(['/questions']);
    });

  }
}
