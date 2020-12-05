import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {name:string, id: number};
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      name:this.route.snapshot.params['name'],
      id: this.route.snapshot.params['id'],
    }
  }

}
