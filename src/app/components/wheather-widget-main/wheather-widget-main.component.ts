import { Component, OnInit } from '@angular/core';
import { WheatherdataService } from 'src/app/wheatherdata.service';
@Component({
  selector: 'app-wheather-widget-main',
  templateUrl: './wheather-widget-main.component.html',
  styleUrls: ['./wheather-widget-main.component.css']
})
export class WheatherWidgetMainComponent implements OnInit {
setwheatherdata:any
  constructor(private service : WheatherdataService) {
    this.service.getwheatherdata().subscribe(data=>{
      console.log(data);
      this.wheatherdata(data);
    })
  }

  ngOnInit(): void {
  }
  wheatherdata(data:any){
    this.setwheatherdata=data;
    let sunsetTime = new Date(this.setwheatherdata.sys.sunset * 1000);
    this.setwheatherdata.sunset_Time = sunsetTime.toLocaleTimeString();
    let currentDate = new Date();
    this.setwheatherdata.isDay = (currentDate.getTime()<sunsetTime.getTime());
    this.setwheatherdata.temp_celcius = (this.setwheatherdata.main.temp - 273.15).toFixed(0);
    this.setwheatherdata.temp_min = (this.setwheatherdata.main.temp_min - 273.15).toFixed(0);
    this.setwheatherdata.temp_max = (this.setwheatherdata.main.temp_max - 273.15).toFixed(0);
    this.setwheatherdata.temp_feels_like = (this.setwheatherdata.main.feels_like - 273.15).toFixed(0);
  }

  
}
