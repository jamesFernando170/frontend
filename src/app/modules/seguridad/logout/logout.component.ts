import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionData } from 'src/app/models/datos-sesion.model';
import { LocalStorageService } from 'src/app/services/compartido/local-storage.service';
import { SecurityService } from 'src/app/services/compartido/security.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private localStorageServices: LocalStorageService,
    private securityServices: SecurityService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.localStorageServices.RemoveSessionData();
    this.securityServices.RefreshSessionData(new SessionData());
    this.router.navigate(["/home"])
  }

}
