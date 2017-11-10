import * as io from "socket.io-client";
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
const SOCKET_URL = '10.10.47.200:6085';

@Injectable()
export class SocketService {
  _socket;
  _message;

  constructor(){
    this._socket = io(SOCKET_URL);
    this._socket.on('connect', () => {
      let action = {type: 'connect'};
      this._message.next( action );
    });
    this._socket.on('blink:led', (val) => {
      let action = {type: 'blink', state: val};
      this._message.next( action );
    });
    // ADD MORE this._socket.on('any:message', (optional) => { ... });
    this._message = new ReplaySubject();
  }

  get message(){ return this._message; }
}
