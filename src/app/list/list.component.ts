import { Component,OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  flights:Flight[]=[];
  code:number=0;

  constructor(private service:FlightService) {}
  ngOnInit(): void {
    this.service.getAll().subscribe(data=> this.flights=data);
  }
  delete(code:number){
    console.log(code);
    this.service.delFlight(code).subscribe(data=>this.flights=data);
    location.reload();
  }

}
