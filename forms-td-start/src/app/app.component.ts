import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = "";
  genders = ['Male', 'Female'];
  defaultGender = 'Male';

  suggestUserName() {
    const suggestedName = 'Superuser';
    //this is not best approch
    //important Note: setValue to set your whole form and patch value to overwrite parts of the form

    // this.signupForm.setValue({
    //   userData : {username:suggestedName, email:'sivadurgamamidala@gmail.com'},
    //   questionAnswer: '',
    //   gender:'Male',
    //   secret:'teacher'
    // });

    this.signupForm.form.patchValue({
      userData : {
        username: suggestedName
      }
    });
  }
  // onSubmit(form: ElementRef){
  //   // console.log("Submitted!")
  //   console.log(form);
  // }
  // onSubmit(form: NgForm){
  //   console.log(form);
  // }
  onSubmit(){
    console.log(this.signupForm);
  }
}
