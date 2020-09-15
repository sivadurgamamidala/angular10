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
  // using ngif to output conditionally
  serverCreated = false;
  //Event binding
  serverCreationStatus = 'No Server was created! ';
  // outputting lists with ngFor
  servers = ["testServer", "testServer1"];
  onCreationServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Server Name is '+ this.serverName;
  }
  // Passing and Using data with Event Binding
  serverName = "test server";
  onUpdateServerName(event : Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  ngOnInit(): void {
  }

}
