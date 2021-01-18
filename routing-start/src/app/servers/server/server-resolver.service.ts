import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/observable";
import { Injectable } from "@angular/core";


import { ServersService } from "../servers.service";

interface Server {
    id: number;
    name: string;
    status: string;
}
// export class ServerResolver implements Resolve<{id:number, name: string, status: string}>{
//     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server>{

//     }
// }
@Injectable()
export class ServerResolver implements Resolve<Server>{
    constructor(private serversService: ServersService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server{
        return this.serversService.getServer(+route.params['id']);
    }
}