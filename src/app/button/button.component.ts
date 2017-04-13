import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
