import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonServiceService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/students";
  getData(){
    return this.http.get(this.url);
  }
}
