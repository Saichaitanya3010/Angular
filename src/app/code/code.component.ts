import { Component,OnInit } from '@angular/core';
import { Flight } from '../model/flight';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit{
  code:number=0;
  flight:Flight=new Flight();
  constructor(private service:FlightService) { }
  ngOnInit(): void {
    
  }
  search(){
    
  }
}
