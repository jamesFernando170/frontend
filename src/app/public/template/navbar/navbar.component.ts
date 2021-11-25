import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionData } from 'src/app/models/datos-sesion.model';
import { SecurityService } from 'src/app/services/compartido/security.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  session: boolean = false; //Variable que nos servira para ocultar el login o el logout, dependiendo del caso
  
  subscription: Subscription = new Subscription();

  constructor(private securityServices: SecurityService) { }

  ngOnInit(): void {
    this.subscription = this.securityServices.GetSessionStatus().subscribe(
      {
        next: (data: SessionData) => {
           this.session = data.isLoggedIn;
        },
        error: (err) =>{
          
        }
      }
    );

  }

}
