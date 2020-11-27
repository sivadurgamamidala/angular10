import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server';
  servers=[];
  x = 0;
  onAddServer(){
    this.x = this.x + 1;
    this.servers.push('Another Server ' + this.x)
  }
  onRemoveServer(id : number){
    const position = id;
    this.servers.splice(position, 1);
  }
}
