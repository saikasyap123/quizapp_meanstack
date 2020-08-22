import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { QuestionsComponent } from './questions/questions.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {path:"", redirectTo:"/home", pathMatch:'full'},
  { path:'home', component:HomeComponent},
  { path:'loginuser', component:LoginComponent},
  { path:'questions/:name', component:QuestionsComponent},
  { path:'admin', component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,LoginComponent, AdminComponent]