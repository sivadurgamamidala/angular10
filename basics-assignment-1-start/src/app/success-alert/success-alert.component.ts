import { Component } from "@angular/core";

@Component({
    selector: 'app-success-alert',
    template: `<p>You are in safe!</p>`,
    styles: [`
    p{
        color: green;
        text-align: center;
        text-transform: uppercase;
        background-color: palegreen;
        border:1px solid green;
        padding: 20px;
        border-radius: 10px;
    }
    `]
})

export class SuccessAlertComponent {

}