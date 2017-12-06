import { Component ,OnInit} from '@angular/core';
import { ApicallService } from './apicall.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApicallService]
})
export class AppComponent implements OnInit{


  searchres : any;
  constructor(private _apicallservice: ApicallService) { }
  lat :number;
  lng:number;
  tno:number;
  ngOnInit() {

     
  
  }

  title: string = 'My first AGM project';

searchtopic()
{
  this._apicallservice.searchTopic(this.tno)
  .subscribe(res => {
    
    this.searchres = res;
    this.lat=res.latitude;
    this.lng=res.longitude;
    console.log(this.lat);
    console.log(this.lng);
  })
}
  

  //console.log(this.searchres);
  
    //lat: number = this.searchres.latitude;
   // lng: number = this.searchres.longitude;


  
}
