import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Utente} from '../model/Utente';
import {environment} from '../../environments/environment';

const header: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

@Injectable({
  providedIn: 'root'
})
export class UtenteService {

  constructor(private http: HttpClient) { }

  login(utente: Utente){
    return this.http.post<Utente>(`${environment.url}/utente/login`, utente, {headers: header});
  }

  registration(utente: Utente){
    return this.http.post<Utente>(`${environment.url}/utente/registrazione`, utente, {headers: header});
  }
}
