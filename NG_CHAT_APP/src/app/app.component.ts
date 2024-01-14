import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {  Router } from '@angular/router';

declare var $:any;

const SOCKET_ENDPOINT = "ws://localhost:4000" //WE CAN USE "http" also insteed "ws"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'ang_chat_app';


  constructor(
    private _router:Router) { }

  ngOnInit(): void {
   
  }

  pageRedirect(path:string){
    this._router.navigate([path])
  }

  















}
