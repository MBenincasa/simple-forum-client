import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.cookieService.deleteAll('/');
    this.router.navigate(['login']);
  }

}
