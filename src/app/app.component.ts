import { Component, OnInit } from '@angular/core';
import { JsonServiceService } from './json-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assign1Search';
  constructor(private ser:JsonServiceService){}

  stdData:any;
  search="";
  searchedStd:any;
  ngOnInit(): void {
      this.ser.getData().subscribe((d)=>{
        this.stdData=d;
      })
  }

  onSearch(){
    for(let s of this.stdData){
      if(s.name.search(this.search)!=-1){
        this.searchedStd.push(s);
      }
    }
  }

}
