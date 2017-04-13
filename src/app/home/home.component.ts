import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Location } from '@angular/common'


@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  home: boolean = true;
  constructor(private location: Location) { }

  ngOnInit() {
  }

}
