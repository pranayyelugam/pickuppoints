import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs/Observable";

@Injectable()
export class ApicallService {

  private topicUrl: string;


  constructor(private _http: Http) { }

  searchTopic(tno:number){
    this.topicUrl = 'http://nearestpickup.herokuapp.com/'+ tno;
    return this._http.get(this.topicUrl)
          .map(res => res.json());
  }

}
