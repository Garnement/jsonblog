import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/users.service";

@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [UsersService]
})
export class AuthorsComponent implements OnInit {

  users: any[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getUsers().subscribe( (data) => this.users = data);

  }

}
