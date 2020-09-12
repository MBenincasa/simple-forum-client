import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Post} from '../../../model/Post';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  idPost: number;
  post: any;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
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
