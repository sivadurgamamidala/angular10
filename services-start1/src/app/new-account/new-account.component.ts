import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {
  @Output() accountAdded = new EventEmitter<{name:string,status:string}>();
  constructor(private loggingService: LoggingService,
    private accountsService : AccountsService) { }

  onCreateAccount(accountName:string,accountStatus:string){
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // })
    this.accountsService.AddedAccount(accountName,accountStatus);
    // this.loggingService.logStatusChange(accountStatus);

    // const service = new LoggingSerice();
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
  }

  ngOnInit(): void {
  }

}
