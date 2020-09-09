import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtenteService} from '../../../services/utente.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  data: any;

  constructor(private formBuilder: FormBuilder, private utenteService: UtenteService, private cookieService: CookieService) {
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      id: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      nome: ['', Validators.required],
      cognome: ['', Validators.required],
      tipo: ['Utente']
    });
  }

  onSubmit() {
    this.utenteService.registration(this.registrationForm.value).subscribe(
      data => {
        this.data = data;
        this.cookieService.set('idUtente', this.data.id);
        this.cookieService.set('nomeUtente', this.data.nome + ' ' + this.data.cognome);
      }
    );
  }

}
