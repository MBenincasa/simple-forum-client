import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Categoria} from '../model/Categoria';
import {environment} from '../../environments/environment';

const header: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPostsByCat(categoria: Categoria){
    return this.http.post(`${environment.url}/post/getByCat`, categoria, {headers: header});
  }

  getPostById(id: number){
    return this.http.get(`${environment.url}/post/get-${id}`);
  }
}
