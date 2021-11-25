import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionData } from 'src/app/models/datos-sesion.model';
import { SecurityService } from 'src/app/services/compartido/security.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user_data: string = "";

  subscription: Subscription = new Subscription();

  constructor(private securityServices: SecurityService) { }

  ngOnInit(): void {
    this.subscription = this.securityServices.GetSessionStatus().subscribe(
      {
        next: (data: SessionData) => {
          if(data.usuario?.nombre){
            this.user_data = data.usuario?.nombre;
          }
        },
        error: (err) =>{
          
        }
      }
    );
  };

}
