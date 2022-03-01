import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Question} from "../../shared/models/Question";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionUrl = 'http://localhost:8080/question';
  constructor(private httpClient: HttpClient) { }

  public add(question: Question, id: number): Observable<Question> {
    return this.httpClient.post<Question>(this.questionUrl + '/' + id, question);
  }

  public update(question: Question): Observable<Question> {
    return this.httpClient.put<Question>(this.questionUrl, question);
  }

  public getAll(): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.questionUrl);
  }

  public getById(id: number): Observable<Question> {
    return this.httpClient.get<Question>(this.questionUrl + '/' + id);
  }

  public delete(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.questionUrl + '/' + id);
  }

  public getByWord(mot: String): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.questionUrl + '/search/' + mot);
  }

}
