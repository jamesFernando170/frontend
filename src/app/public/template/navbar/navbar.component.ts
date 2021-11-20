import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  session: boolean = false; //Variable que nos servira para ocultar el login o el logout, dependiendo del caso
  

  constructor() { }

  ngOnInit(): void {
  }

}
