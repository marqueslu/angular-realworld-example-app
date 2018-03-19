import { UserService } from './shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  constructor (private userService: UserService) {}
  ngOnInit(){
    this.userService.populate();
  }
}
