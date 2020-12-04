import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private routers:Router) { }

  ngOnInit(): void {
  }
  onLoadServers(){
    this.routers.navigate(['/servers'])
  }
}
