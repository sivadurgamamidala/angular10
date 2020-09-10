import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: '<app-server></app-server><app-server></app-server>',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  // Property binding
  allowNewServer = false;
  constructor() { 
    setTimeout(() => {this.allowNewServer = true} ,3000);
  }
  //Event binding
  serverCreationStatus = 'No Server was created!';
  onCreationServer(){
    this.serverCreationStatus = 'Server was created!';
  }
  ngOnInit(): void {
  }

}
