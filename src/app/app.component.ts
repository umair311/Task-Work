import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators,FormBuilder} from '@angular/forms'
import {passwordvalidation} from './shared/password.validator'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public fb:FormBuilder){

  }
  
  // myform=new FormGroup({
  // email:new FormControl('',Validators.required),
  // password:new FormControl('', Validators.required),
  // cpassword:new FormControl('',Validators.required),
  // });
  myform=this.fb.group({
    email:['',Validators.required],
    password:['',Validators.required],
    cpassword:['',Validators.required],
    

  },{validator : passwordvalidation})


  submit()
{
   console.log(this.myform.value);
  
}
  
}
