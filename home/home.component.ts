import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuizService } from '../quiz.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  RegistrationForm : FormGroup
  constructor(private router:Router, private route:ActivatedRoute, private fb:FormBuilder, private qs:QuizService, private sb:MatSnackBar) { }

  public adminerr="";
  ngOnInit() {
    this.RegistrationForm = this.fb.group({
      username:['', [Validators.required, Validators.minLength(3)]],
      password:[''],
      email:['',[Validators.email]]
    })
  }
  get username(){
    return this.RegistrationForm.get('username')
  }
  get password(){
    return this.RegistrationForm.get('password')
  }
  get email(){
    return this.RegistrationForm.get('email')
  }
  
  Signin(){
    this.router.navigate(['/loginuser'])
  }
  Admin(){
    if (this.RegistrationForm.value.username=="kasyap" && this.RegistrationForm.value.password=="14092000"){
    this.router.navigate(['/admin'])
    }
    else {
     // this.adminerr = "*Invalid Admin Credentials"
     
      this.sb.open('Invalid Admin Credentials')
      setTimeout(()=>{
        this.sb.dismiss()
      }, 3000)
    
      
    }
  }
  register1(){
    this.qs.register(JSON.stringify(this.RegistrationForm.value))
    .subscribe(data=>{console.log(data);this.router.navigate(['/loginuser'])},
    error=>{this.adminerr = error})
  }
}
