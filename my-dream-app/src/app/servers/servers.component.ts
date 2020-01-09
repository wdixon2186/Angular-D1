import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No server was created!';
serverName = 'TestServer';
allowNewUserName = false;
userNameCreationStatus = 'No username was created'
userName = '';

  // constructor() {
  //   setTimeout(() => {
  //     this.allowNewUserName = true;
  //   }, 2000);
  //  }

  ngOnInit() {
  }

  onCreateServer() {
  this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;

  }
  onCreateUsername(){
this.userNameCreationStatus = 'Username was created! userName is ' + this.userName;
  }
  onUpdateUserName(event: any){
    this.userName = (<HTMLInputElement>event.target).value;
  }

}

