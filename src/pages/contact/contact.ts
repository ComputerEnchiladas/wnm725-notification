import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocketService } from '../../app/socket.service';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public state;
  constructor(public navCtrl: NavController, private socket: SocketService) {

  }

  ngOnInit(){
    this.socket.message
      .subscribe( led => {
        if( led.type == 'blink'){
          this.state = led.state;
        }
        console.log( led );
      })
  }
}
