import { Component, OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  flight:Flight=new Flight();
  fcode:number=0;
  constructor(private service:FlightService) { }
  ngOnInit(): void {
    
  }
 find(){
  this.service.findByCode(this.fcode).subscribe(data=>this.flight=data);
 }
}
