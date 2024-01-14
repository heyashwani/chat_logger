import { Component, OnInit } from '@angular/core';

import * as io from 'socket.io-client';

declare var $:any;

const SOCKET_ENDPOINT = "ws://localhost:4000" //WE CAN USE "http" also insteed "ws"

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

 
  socket: any;
  selectedFile: any;
  imgUrl: any;

  constructor() { }

  ngOnInit(): void {
    this.setupSocketConnection()
  }

  setupSocketConnection() {
    this.socket = io.connect(SOCKET_ENDPOINT);
    console.log("connection",this.socket)
    this.socket.on('chat-message', (data: any) => {
    if (data) {
      this.comingInsert(data.message)
      this.imgUrl = data.img
     }
   });
 }

 SendMessage(val:any) {
  this.socket.emit('chat-message', {
    username:"ashwani",
    message:val,
    img:this.selectedFile
  });

  this.myInsert(val)
  
}

myInsert(val:any){
  // var h = document.getElementById("main");
  // h.insertAdjacentHTML("afterend", "<article class='send_box'><p>"+val+"</p></article>"); 

  // $("<article class='send_box'><p>"+val+"</p></article>").insertAfter("#main");
  $('#main').append("<article class='send_box'><p>"+val+"</p></article>");
  console.log("called")
}

comingInsert(val:any){
  var h = document.getElementById("main");


  // h.insertAdjacentHTML("afterend", "<aside class='coming_box'><p>"+val+"</p></aside>"); 
  // insertAfter("<aside class='coming_box'><p>"+val+"</p></aside>",  h.lastChild);

  $('#main').append("<aside class='coming_box'><p>"+val+"</p></aside>");
  console.log("called")
}


  onFileChanged(ev:any)
  {
      console.log(this.selectedFile);

      var reader = new FileReader();
    
      console.log("file details",this.selectedFile)
      reader.readAsDataURL(ev.target.files[0]); 
      reader.onload = (_event) => { 
        this.selectedFile = reader.result; 
      }

  }

}
