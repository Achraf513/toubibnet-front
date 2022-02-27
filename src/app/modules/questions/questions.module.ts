import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuestionsRoutingModule} from './questions-routing.module';
import {QuestionsComponent} from './questions.component';
import {QuestionsListComponent} from './questions-list/questions-list.component';
import {HttpClientModule} from "@angular/common/http";
import {AddQuestionComponent} from './add-question/add-question.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UpdateQuestionComponent} from './update-question/update-question.component';
import {QuestionsDetailsComponent} from './questions-details/questions-details.component';
import {DropdownModule} from "primeng-lts/dropdown";
import {InputTextModule} from "primeng-lts/inputtext";
import {ButtonModule} from "primeng-lts/button";
import {ToastModule} from "primeng-lts/toast";
import {PaginatorModule} from "primeng/paginator";


@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionsListComponent,
    AddQuestionComponent,
    UpdateQuestionComponent,
    QuestionsDetailsComponent,
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    PaginatorModule
  ],
  providers: []
})
export class QuestionsModule { }
