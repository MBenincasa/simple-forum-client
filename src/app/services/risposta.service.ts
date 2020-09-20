import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Risposta} from '../model/Risposta';
import {environment} from '../../environments/environment';
import {Post} from '../model/Post';

const header: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

@Injectable({
  providedIn: 'root'
})
export class RispostaService {

  constructor(private http: HttpClient) { }

  createRisposta(risposta: Risposta){
    return this.http.post<Risposta>(`${environment.url}/risposta/crea`, risposta, {headers: header});
  }

  getByPost(post: Post){
    return this.http.post<Risposta>(`${environment.url}/risposta/getByPost`, post, {headers: header});
  }
}
