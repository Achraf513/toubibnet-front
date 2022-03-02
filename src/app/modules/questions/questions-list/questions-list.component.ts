import {Component, OnInit} from '@angular/core';
import {Question} from "../../shared/models/Question";
import {QuestionService} from "../services/question.service";
import {Router} from "@angular/router";
import {RoutingService} from 'src/app/routing.service';
import {TokenService} from 'src/app/token.service';
import {MenuItem, SelectItem} from "primeng/api";


@Component({
  selector: 'app-questions-list',
  templateUrl: './questions-list.component.html',
  styleUrls: ['./questions-list.component.css']
})
export class QuestionsListComponent implements OnInit {

  items2!: MenuItem[];

  constructor(private questionService: QuestionService,
              private routingService: RoutingService,
              private tokenService: TokenService,
              private router: Router) {
    this.routingService.setCommunActiveRouteTo("Question")
  }

  selectedCategory!: SelectItem;
  categories!: string[];
  questions !: Question[];
  contentSearch!: string;
  id = this.tokenService.getUser()!.id;
  lengthOfList!: number;
  items!: SelectItem[];

  ngOnInit(): void {
    this.items2 = [
      {label: 'Tout les questions', icon: 'pi pi-fw pi-home'},
      {label: 'Mes questions', icon: 'pi pi-fw pi-calendar'}
    ];
    this.tokenService.redirectIfNotSignedIn();
    this.listOfQuestion();
    this.getCategories();
  }

  listOfQuestion() {
    this.questionService.getAll().subscribe(data => {
      this.questions = data;
      this.lengthOfList = data.length;
      this.questions = data.slice(0, 2);
      console.log(data)
    })
  }

  getCategories() {
    this.items = [];
    this.items.push({label:"All",value:0})
    this.questionService.getCategories().subscribe(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        this.items.push({label: data[i], value: i+1});
      }
    });
    console.log(this.items);

  }

  delete(id: number) {
    this.questionService.delete(id).subscribe(data => {
      console.log(data)
      if (data) {
        this.listOfQuestion()
      }
    })
  }

  public update(id: number) {
    this.router.navigate(['questions/update', id]);
  }

  add() {
    this.router.navigate(['questions/add']);
  }

  checkDetails(id: number) {
    this.router.navigate(['questions/check-details', id])
  }

  filterSearch() {
    this.questionService.getByWord(this.contentSearch).subscribe(data=>{
      this.questions=data;
      console.log(data)
    });
  }

  paginate(event: any) {
    console.log(this.selectedCategory)
    if (this.selectedCategory == undefined||this.selectedCategory.value=="All") {
      this.questionService.getAll().subscribe(data => {
        this.questions = data;
        this.lengthOfList = data.length;
        this.questions = data.slice(event.first, event.first + event.rows);
        console.log(data)
      })
    } else {
      this.questionService.getByCategorie(this.selectedCategory.label).subscribe(data => {
        this.lengthOfList = data.length;
        this.questions = data.slice(event.first, event.first + event.rows);
        console.log(data);
      });

    }
  }

  getByCategory() {
    if(this.selectedCategory.label=="All"){
      this.listOfQuestion();
    }
    else {
    this.questionService.getByCategorie(this.selectedCategory.label).subscribe(data => {
      this.lengthOfList = data.length;
      this.questions = data.slice(0, 2);
      console.log(data);
    });
    }
  }

  changeQuestion($event:any) {
    console.log("saif")
  }
}
