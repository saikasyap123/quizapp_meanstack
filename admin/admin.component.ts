import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { QuizService } from '../quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private fb:FormBuilder, private qs :QuizService, private sb :MatSnackBar) { }
  QuestionForm : FormGroup
  ngOnInit(): void {
    this.QuestionForm = this.fb.group({
      quesno : [''],
      question : [''],
      opt1 : [''],
      opt2 : [''],
      opt3 : [''],
      opt4 : [''],
      ans  : ['']
    })
  }
  Home(){
    this.router.navigate(['/home'])
  }
  get qno(){
    return this.QuestionForm.get('quesno')
  }
  get ques(){
    return this.QuestionForm.get('question')
  }
  get opt1(){
    return this.QuestionForm.get('opt1')
  }
  get opt2(){
    return this.QuestionForm.get('opt2')
  }
  get opt3(){
    return this.QuestionForm.get('opt3')
  }
  get opt4(){
    return this.QuestionForm.get('opt4')
  }
  get ans(){
    return this.QuestionForm.get('ans')
  }
  sendData(){
    this.qs.forward(JSON.stringify({"quesno":this.QuestionForm.value.quesno,"question":this.QuestionForm.value.question,
                          "opt1":this.QuestionForm.value.opt1,"opt2":this.QuestionForm.value.opt2,
                          "opt3":this.QuestionForm.value.opt3,"opt4":this.QuestionForm.value.opt4,
                           "ans":this.QuestionForm.value.ans}))
    .subscribe(data=>{
      this.sb.open("Question Added Successfully")
      setTimeout(()=>{
        this.sb.dismiss()
      }, 5000)
  },error=>{console.log(error)})
  }
}
