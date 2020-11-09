import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput:ElementRef;
  constructor() { }

  // onAddServer(){
  //   // this.serverElements.push({
  //   //   type: 'server',
  //   //   name: this.newServerName,
  //   //   content: this.newServerContent
  //   // });
  //   this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }
  // onAddServer(nameInput: HTMLInputElement){
  //   // this.serverElements.push({
  //   //   type: 'server',
  //   //   name: this.newServerName,
  //   //   content: this.newServerContent
  //   // });
  //   this.serverCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  // }
  onAddServer(nameInput: HTMLInputElement){
    // this.serverElements.push({
    //   type: 'server',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }

  
  // onAddBluePrint(){
  //   // this.serverElements.push({
  //   //   type: 'blueprint',
  //   //   name: this.newServerName,
  //   //   content: this.newServerContent
  //   // });
  //   this.blueprintCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent});
  // }
  // onAddBluePrint(nameInput: HTMLInputElement){
  //   // this.serverElements.push({
  //   //   type: 'blueprint',
  //   //   name: this.newServerName,
  //   //   content: this.newServerContent
  //   // });
  //   this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.newServerContent});
  // }
  onAddBluePrint(nameInput: HTMLInputElement){
    // this.serverElements.push({
    //   type: 'blueprint',
    //   name: this.newServerName,
    //   content: this.newServerContent
    // });
    this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
  }
  ngOnInit(): void {

  }

}
