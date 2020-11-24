import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  accounts: {name:string, status: string}[] = [];
  constructor(private accountsService : AccountsService){}
  ngOnInit(){
    this.accounts = this.accountsService.accounts;
  }
  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Test Account',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ]
  // onChangedStatus(updateInfo:{id:number,newStatus:string}){
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
  // onAddedAccount(newAccount:{name:string,status:string}){
  //   this.accounts.push(newAccount);
  // }
}
