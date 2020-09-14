import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Categoria} from '../model/Categoria';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${environment.url}/categoria/getAll`);
  }

  getById(id: number){
    const user = this.http.get(`${environment.url}/categoria/get-${id}`);
    return user.pipe(map(utente => utente));
  }
}
