import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'my-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [UsersService]
})

export class SidebarComponent implements OnInit {

  users: any[];

  constructor(public usersService: UsersService ) { }

  ngOnInit() {
      this.usersService.getUsers().subscribe( (data) => this.users = data);

  }

}
