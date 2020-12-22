import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routers:Router, private authService:AuthService) { }

  ngOnInit() {
  }
  // onLoadServers(){
  //   // complex calculation
  //   this.routers.navigate(['/servers']);
  // }
  onLoadServers(id:number){
    this.routers.navigate(['/servers',id, 'edit'],{queryParams: {allowEdit:'1'}, fragment:'Loading'});
  }
  onLogIn(){
    this.authService.logIn();
  }
  onLogOut(){
    this.authService.logOut();
  }
}
