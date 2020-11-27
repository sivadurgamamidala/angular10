import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class CounterService{
    counterToActive:number = 0;
    counterToInactive:number = 0;
}