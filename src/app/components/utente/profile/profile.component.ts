import { Component, OnInit } from '@angular/core';
import {UtenteService} from '../../../services/utente.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  utente: any;

  constructor(private utenteService: UtenteService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    if (!this.cookieService.get('idUtente')) {
      this.router.navigate(['login']);
    }

    this.getUtente();
  }

  getUtente(){
    const id = Number(this.cookieService.get('idUtente'));
    this.utenteService.getById(id).subscribe(
      data => this.utente = data
    );
  }

}
