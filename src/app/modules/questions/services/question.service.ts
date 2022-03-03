import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Question} from "../../shared/models/Question";
import {Observable} from "rxjs";
import {QuestionPerPageDto} from "../../shared/models/QuestionPerPageDto";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  private questionUrl = 'http://localhost:8080/question';

  constructor(private httpClient: HttpClient) {
  }

  public add(question: Question, id: number): Observable<Question> {
    return this.httpClient.post<Question>(this.questionUrl + '/' + id, question);
  }

  public update(question: Question): Observable<Question> {
    return this.httpClient.put<Question>(this.questionUrl, question);
  }

  public getAll(page:number,size:number): Observable<QuestionPerPageDto> {
    return this.httpClient.get<QuestionPerPageDto>(this.questionUrl+'/page/'+page+'/'+size);
  }
  public getTotalOfElements(page:number,size:number): Observable<number> {
    return this.httpClient.get<number>(this.questionUrl+'/totalelements/'+page+'/'+size);
  }

  public getById(id: number): Observable<Question> {
    return this.httpClient.get<Question>(this.questionUrl + '/' + id);
  }

  public delete(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(this.questionUrl + '/' + id);
  }

  public getByWord(mot: string,page:number,size:number): Observable<QuestionPerPageDto> {
    return this.httpClient.get<QuestionPerPageDto>(this.questionUrl + '/search/'+mot+'/page/'+size+'/'+page);
  }
  public getTotalElementByWord(mot: string,page:number,size:number): Observable<number> {
    return this.httpClient.get<number>(this.questionUrl + '/totalelementsbyword/'+mot+'/page/'+size+'/'+page);
  }

  public getByCategorie(category: string | undefined,page:number,size:number): Observable<QuestionPerPageDto> {
    return this.httpClient.get<QuestionPerPageDto>(this.questionUrl + '/category/'+category+'/page/'+page+'/'+size );
  }
  public getTotalElementByCategorie(category: string | undefined,page:number,size:number): Observable<number> {
    return this.httpClient.get<number>(this.questionUrl + '/totalelementsbycategory/'+category+'/page/'+page+'/'+size );
  }

  public getCategories(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.questionUrl + '/categories');
  }
}
