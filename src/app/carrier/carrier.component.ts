import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-carrier',
  templateUrl: './carrier.component.html',
  styleUrls: ['./carrier.component.css']
})
export class CarrierComponent implements OnInit {
  flights:Flight[]=[];
  carriers:string[]=["jet","Indigo","AirIndia","vistara"];
  car:string="";
  constructor(private service:FlightService) {}
  ngOnInit(): void {
    
  }
  search(){
 this.service.findByCarrier(this.car).subscribe(data=>this.flights=data);
  }

}
