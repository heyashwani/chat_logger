import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logger',
  templateUrl: './logger.component.html',
  styleUrls: ['./logger.component.css']
})
export class LoggerComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  createLog(){
    const url = "http://localhost:3000/";
    let data = {
      name:"Rohan234"
    }
    this.http.post(url,data).subscribe((res:any)=>{
      alert(res.msg)
    })
  }
}
