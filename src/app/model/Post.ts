import {DatePipe} from '@angular/common';
import {Utente} from './Utente';
import {Categoria} from './Categoria';

export class Post {
  id: number;
  titolo: string;
  testo: string;
  data: DatePipe;
  utente: Utente;
  categoria: Categoria;
}
