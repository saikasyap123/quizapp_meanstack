import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { QuizService } from '../quiz.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public currentData={};
  public currentQuestion;
  public option1;
  public option2;
  public option3;
  public option4;
  public answer;
  public effect;
  public var2 = 1
  public scores = 0
  public cs;
  public cs1;
  public var31;
  public var32;
  public var33;
  public var34;
  public var1;
  constructor(private router:Router, private route:ActivatedRoute, private qs:QuizService, private dg:MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => {
      let id = params.get('name')
      this.var1 = id})
      this.qs.getData(JSON.stringify({"quesno":this.var2}))
    .subscribe(data=>{
      this.currentData = data;
    this.currentQuestion = data["question"]
    this.option1 = this.currentData["opt1"]
    this.option2 = this.currentData["opt2"]
    this.option3 = this.currentData["opt3"]
    this.option4 = this.currentData["opt4"]
    this.answer = this.currentData["ans"]
    this.qs.quizdata.push(this.currentData["ans"])
    
    }, error=>{console.log(error)})
  }
  goNext() {
   
    this.var2 = this.var2 + 1
    this.qs.getData(JSON.stringify({"quesno":this.var2}))
    .subscribe(data=>{
      if(data["message"]=="An Error Occured!")
    {

      this.qs.name = this.var1;
      this.qs.score = this.scores;
      this.dg.open(DialogComponent)
      setTimeout(()=>{
        this.dg.closeAll()
      this.router.navigate(['/home'])
      }, 6000)
      
    }
    else{
      this.currentData = data;
    this.currentQuestion = data["question"]
    this.option1 = this.currentData["opt1"]
    this.option2 = this.currentData["opt2"]
    this.option3 = this.currentData["opt3"]
    this.option4 = this.currentData["opt4"]
    this.answer = this.currentData["ans"]
    this.qs.quizdata.push(this.currentData["ans"])
  
    }}, error=>{console.log(error)})
    
    
    }
  score(param1) {

    this.cs = param1    
    if (param1 === this.answer) {
      this.scores = this.scores + 1
    }
    
  }
  clear() {
    if (this.cs === this.answer) {
      this.scores = this.scores - 1
    }
  }
  

}
