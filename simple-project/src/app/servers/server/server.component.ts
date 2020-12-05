import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  servers:{id:number,name:string,status:string};
  constructor(private serversService:ServersService,
    private router:Router) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServer(1)
  }

}
