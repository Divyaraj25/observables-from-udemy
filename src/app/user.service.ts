import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class userActivated{
    userActivated = new Subject<boolean>()
}