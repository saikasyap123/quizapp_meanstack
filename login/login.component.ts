import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { QuizService } from '../quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm : FormGroup
  constructor(private route:ActivatedRoute, private router:Router, private fb:FormBuilder, private qs :QuizService, private sb:MatSnackBar) { }
  ngOnInit(): void {
    this.LoginForm = this.fb.group({
      username:['', [Validators.required, Validators.minLength(3)]],
      password:['',[Validators.required]]
    })
  }
  get username(){
    return this.LoginForm.get('username')
  }
  get password(){
    return this.LoginForm.get('password')
  }
  Home(){
    this.router.navigate(['/home'])
  }
  
  login1(){
    this.qs.login(JSON.stringify(this.LoginForm.value))
    .subscribe(data=>{if(data["message"]==="success"){this.router.navigate(['/questions',this.LoginForm.value.username])}else{
      this.sb.open("Invalid Credentials")
      setInterval(()=>{
        this.sb.dismiss()
      }, 5000)
        
      }
  },
    error=>{console.log(error)})
  }
}
