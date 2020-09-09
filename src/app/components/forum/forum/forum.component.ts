import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  constructor(private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
    if (!this.cookieService.get('idUtente')) {
      this.router.navigate(['login']);
    }
  }

}
