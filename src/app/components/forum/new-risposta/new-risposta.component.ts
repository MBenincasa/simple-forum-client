import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import {UtenteService} from '../../../services/utente.service';
import {PostService} from '../../../services/post.service';
import {Risposta} from '../../../model/Risposta';
import {RispostaService} from '../../../services/risposta.service';

@Component({
  selector: 'app-new-risposta',
  templateUrl: './new-risposta.component.html',
  styleUrls: ['./new-risposta.component.css']
})
export class NewRispostaComponent implements OnInit {

  rispostaForm: FormGroup;
  idPost: number;
  utente: any;
  post: any;
  dataComment;
  localDate;
  data: any;

  constructor(private rispostaService: RispostaService, private postService: PostService, private utenteService: UtenteService, private cookieService: CookieService, private router: Router, private activatedRoute: ActivatedRoute, private dataPipe: DatePipe, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.idPost = +params.get('id');
    });

    this.utente = this.getUtente();
    this.post = this.getPost();

    this.rispostaForm = this.formBuilder.group(
      {
        id: ['', Validators.required],
        testo: ['', Validators.required]
      }
    );
  }

  async getUtente() {
    const id = Number(this.cookieService.get('idUtente'));
    return this.utente = await this.utenteService.getById(id).toPromise();
  }

  async getPost() {
    return this.post = await this.postService.getPostById(this.idPost).toPromise();
  }

  onSubmit() {
    const risposta: Risposta = new Risposta();

    this.dataComment = Date.now();
    this.localDate = this.dataPipe.transform(this.dataComment, 'yyyy-MM-ddTHH:mm:ss', 'it-IT');

    risposta.utente = this.utente;
    risposta.post = this.post;
    risposta.data = this.localDate;
    risposta.id = this.rispostaForm.value.id;
    risposta.testo = this.rispostaForm.value.testo;

    this.rispostaService.createRisposta(risposta).subscribe(
      data => {
        this.data = data;
        window.location.reload();
      }
    );
  }

}
