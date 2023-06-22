import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Flight } from '../model/flight';
import { FlightService } from '../services/flight.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
flight: Flight=new Flight();
carriers:string[]=["Jet","Indigo","AirIndia","Vistara"];
cities:string[]=["mumbai","pune","Goa","Delhi","Bengaluru","Kochi","Kolakata"];

  constructor(private service:FlightService,private route:Router) { }
  ngOnInit():void{
    
  }

  save(){
    this.service.addFlight(this.flight);
    this.route.navigate(['list']);

  }
}


