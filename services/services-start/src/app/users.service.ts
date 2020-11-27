import { Injectable } from "@angular/core";
import { CounterService } from './counter.service';

@Injectable({
    providedIn:'root'
})
export class UsersService{
    activeUsers = ["shiva","papi","gopi","pavan"];
    inactiveUsers = ["praneeth","chukka","saikumar","rahul"];
    constructor(private counterService:CounterService){}
    onSetToInactive(id:number){
        this.inactiveUsers.push(this.activeUsers[id]);
        this.activeUsers.splice(id,1);
        this.counterService.counterToInactive++;
    }
    onSetToActive(id:number){
        this.activeUsers.push(this.inactiveUsers[id]);
        this.inactiveUsers.splice(id,1);
        this.counterService.counterToActive++;
    }
}