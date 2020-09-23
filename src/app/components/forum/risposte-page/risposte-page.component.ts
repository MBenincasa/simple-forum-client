import {Component, OnInit} from '@angular/core';
import {RispostaService} from '../../../services/risposta.service';
import {ActivatedRoute} from '@angular/router';
import {PostService} from '../../../services/post.service';

@Component({
  selector: 'app-risposte-page',
  templateUrl: './risposte-page.component.html',
  styleUrls: ['./risposte-page.component.css']
})
export class RispostePageComponent implements OnInit {

  idPost: number;
  post: any;
  data: any;

  constructor(private postService: PostService, private activatedRoute: ActivatedRoute, private rispostaService: RispostaService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.idPost = +params.get('id');
    });

    this.getRisposteByPost();
  }

  getRisposteByPost() {
    this.postService.getPostById(this.idPost).subscribe(
      data => {
        this.post = data;
        console.log(this.post);
        this.rispostaService.getRispostaByPost(this.post).subscribe(
          data => {
            this.data = data;
            console.log(this.data);
          }
        );
      }
    );
  }
}
