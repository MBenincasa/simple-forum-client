import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtenteService} from '../../../services/utente.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  data: any;

  constructor(private formBuilder: FormBuilder, private utenteService: UtenteService, private cookieService: CookieService, private router: Router) {
  }

  ngOnInit(): void {
    if(this.cookieService.get('idUtente')){
      this.router.navigate(['forum']);
    }

    this.loginForm = this.formBuilder.group({
      id: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
      nome: [''],
      cognome: [''],
      tipo: ['']
    });
  }

  onSubmit() {
    this.utenteService.login(this.loginForm.value).subscribe(
      data => {
        this.data = data;
        this.cookieService.set('idUtente', this.data.id);
        this.cookieService.set('nomeUtente', this.data.nome + ' ' + this.data.cognome);
        this.router.navigate(['forum']);
      }
    );
  }

}
