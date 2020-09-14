import {Component, OnInit} from '@angular/core';
import {CategoriaService} from '../../../services/categoria.service';
import {CookieService} from 'ngx-cookie-service';
import {UtenteService} from '../../../services/utente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {PostService} from '../../../services/post.service';
import {Post} from '../../../model/Post';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  postForm: FormGroup;
  utente: any;
  idCat: number;
  categoria: any;
  dataPost;
  localDate;
  data: any;

  constructor(private postService: PostService, private dataPipe: DatePipe, private formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private categoriaService: CategoriaService, private cookieService: CookieService, private utenteService: UtenteService) {

  }

  ngOnInit(): void {
    if (!this.cookieService.get('idUtente')) {
      this.router.navigate(['login']);
    }

    this.activatedRoute.paramMap.subscribe(params => {
      this.idCat = +params.get('id');
    });

    this.categoria = this.getCategoria();
    this.utente = this.getUtente();

    this.postForm = this.formBuilder.group({
      id: ['', Validators.required],
      titolo: ['', Validators.required],
      testo: ['', Validators.required]
    });
  }

  async getUtente() {
    const id = Number(this.cookieService.get('idUtente'));
    return this.utente = await this.utenteService.getById(id).toPromise();
  }

  async getCategoria() {
    return this.categoria = await this.categoriaService.getById(this.idCat).toPromise();
  }

  onSubmit() {
    const post: Post = new Post();

    this.dataPost = Date.now();
    this.localDate = this.dataPipe.transform(this.dataPost, 'yyyy-MM-ddTHH:mm:ss', 'it-IT');

    post.utente = this.utente;
    post.categoria = this.categoria;
    post.id = this.postForm.value.id;
    post.titolo = this.postForm.value.titolo;
    post.testo = this.postForm.value.testo;
    post.data = this.localDate;

    this.postService.insertPost(post).subscribe(
      data => {
        this.data = data;
        this.router.navigate(['/post-details', this.data?.id]);
      }
    );
  }
}
