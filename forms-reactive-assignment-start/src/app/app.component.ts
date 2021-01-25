import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  signupForm : FormGroup;
  forbiddenProjectName = ['Test'];
  
  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectname' : new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this)], this.asyncforbiddenProjectNames),
      'email' : new FormControl(null, [Validators.required,Validators.email]),
      'projectstatus' : new FormControl('critical', Validators.required)
    });
  }

  forbiddenProjectNames(control: FormControl) : {[s:string] : boolean} {
    // if (this.forbiddenProjectName.indexOf(control.value) !== -1){
    //   return {'projectNameIsForbidden' : true};
    // }
    if (control.value === 'Test'){
      return {'projectNameIsForbidden' : true};
    }
    return null;
  }


  asyncforbiddenProjectNames(control: FormControl) : Promise<any> | Observable<any> {
    const promise = new Promise<any> ((resolve,reject) => {
      setTimeout(() => {
        if (control.value === 'testcase') {
          resolve({'projectNameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }
}
