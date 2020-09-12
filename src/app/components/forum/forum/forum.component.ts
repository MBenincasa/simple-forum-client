import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {CategoriaService} from '../../../services/categoria.service';
import {Categoria} from '../../../model/Categoria';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {

  data: any;
  posts: any;

  constructor(private cookieService: CookieService, private router: Router, private categoriaService: CategoriaService, private postService: PostService) { }

  ngOnInit(): void {
    if (!this.cookieService.get('idUtente')) {
      this.router.navigate(['login']);
    }

    this.getAllCategories();
  }

  getAllCategories(){
    this.categoriaService.getAll().subscribe(
      data => {
        this.data = data;
        for(let cat of this.data){
          this.getPostsByCat(cat);
        }
      }
    );
  }

  getPostsByCat(categoria: Categoria){
    this.postService.getPostsByCat(categoria).subscribe(
      posts => this.posts = posts
    );
  }

  toPost(id: number){

  }

}
