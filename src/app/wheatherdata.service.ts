import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WheatherdataService {

  constructor(private http:HttpClient) { }
  getwheatherdata(){
    let url="https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=831cb921ead4ae96e6bd9b88435cae3c";
    return this.http.get(url);
   }
}
