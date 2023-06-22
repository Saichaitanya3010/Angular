import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Flight } from '../model/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private static baseUri:String="http://localhost:8806";

  constructor(private http:HttpClient) { }

  addFlight(f:Flight){
    this.http.post(FlightService.baseUri + "/flight",f).subscribe(data=>data=f);
  }
  getAll(){
    return this.http.get<Flight[]>(FlightService.baseUri + "/flights");
  }
  findByCode(code:number){
    return this.http.get<Flight>(FlightService.baseUri + "/flight/" +code);
  }
  findByCarrier(carrier:string){
    return this.http.get<Flight[]>(FlightService.baseUri + "/flight/carrier/" +carrier);
  }

  delFlight(idx:number){
    console.log(idx);
    this.http.delete(FlightService.baseUri + "/flight/delete/" +idx).subscribe(data=>data=idx);
    return this.getAll();


  }
}

