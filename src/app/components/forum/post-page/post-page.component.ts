import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from '../../../model/Post';
import {PostService} from '../../../services/post.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  idPost: number;
  post: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private postService: PostService, private cookieService: CookieService) { }

  ngOnInit(): void {
    if (!this.cookieService.get('idUtente')) {
      this.router.navigate(['login']);
    }

    this.activatedRoute.paramMap.subscribe(params => {
      this.idPost = +params.get('id');
    });

    if(this.idPost != null){
      this.getInfoPage();
    }
  }

  getInfoPage(){
    this.postService.getPostById(this.idPost).subscribe(
      post => this.post = post
    );
  }

}
