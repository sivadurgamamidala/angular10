import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users=[
    {
      name:"shiva",
      id:1
    },
    {
      name:"vani kumari",
      id:2
    },
    {
      name:"giri babu",
      id:3
    },
    {
      name:"tulasi sai priya",
      id:4
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
