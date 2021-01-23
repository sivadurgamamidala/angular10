import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f')  signUpForm:NgForm;
  subscription='advanced';
  submitted = false;
  formData = {
    email : "",
    subscription : "",
    password : ""
  }
  onSubmit(){
    this.formData.email = this.signUpForm.value.userData.email;
    this.formData.subscription = this.signUpForm.value.userData.subscription;
    this.formData.password = this.signUpForm.value.userData.password;
    this.submitted = true;
    console.log('Email: '+ this.formData.email);
    console.log('Subscription: '+ this.formData.subscription);
    console.log('Password: '+ this.formData.password);
  }
}
