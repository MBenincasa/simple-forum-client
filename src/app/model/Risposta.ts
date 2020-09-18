import {DatePipe} from '@angular/common';
import {Post} from './Post';
import {Utente} from './Utente';

export class Risposta {
  id: number;
  testo: string;
  data: DatePipe;
  post: Post;
  utente: Utente;
}
