import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  public quizdata = []
  public name;
  public score;
  constructor(private http:HttpClient) { }
  forward(body:any){
    return this.http.post('http://127.0.0.1:3000/quiz/save',body,{
      observe:'body',
      headers:new HttpHeaders().append('Content-Type','application/json')
    });
}
register(body:any){
  return this.http.post('http://127.0.0.1:3000/user/register',body,{
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
  });
}
login(body:any){
return this.http.post('http://127.0.0.1:3000/user/login',body,{
    observe:'body',
    headers:new HttpHeaders().append('Content-Type','application/json')
})
}

getData(body:any){

return this.http.post('http://127.0.0.1:3000/quiz/display',body,{
observe:'body',
headers:new HttpHeaders().append('Content-Type','application/json')
})
                    
}

errorHandler( error:HttpErrorResponse){
return throwError(error.message || "Server Error") 
}



}
