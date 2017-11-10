import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SocketService } from '../../app/socket.service';
import { Http } from '@angular/http';


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public state;
  constructor(public navCtrl: NavController, private socket: SocketService, private http: Http) {

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
  sendMessage(){
    this.http.post('http://10.10.47.200:6085/reply', {}).toPromise().then( (res) => {
      console.log( res );
      alert('Sent');
    })
  }
}
