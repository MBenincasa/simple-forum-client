import {Component, OnInit} from '@angular/core';
import {PostService} from '../../../services/post.service';
import {UtenteService} from '../../../services/utente.service';
import {CookieService} from 'ngx-cookie-service';
import {RispostaService} from '../../../services/risposta.service';

@Component({
  selector: 'app-profile-feed',
  templateUrl: './profile-feed.component.html',
  styleUrls: ['./profile-feed.component.css']
})
export class ProfileFeedComponent implements OnInit {

  posts: any;
  risposte: any;
  utente: any;
  postsArray: any[] = [];
  risposteArray: any[] = [];
  sizePosts;
  sizeRisposte;

  pageP = 1;
  pageSizeP = 4;

  pageC = 1;
  pageSizeC = 4;

  constructor(private postService: PostService, private utenteService: UtenteService, private cookieService: CookieService, private rispostaService: RispostaService) {
  }

  ngOnInit(): void {
    this.getPostByUser();
  }

  getPostByUser() {
    const id = Number(this.cookieService.get('idUtente'));
    this.utenteService.getById(id).subscribe(
      data => {
        this.utente = data;
        this.postService.getPostByUser(this.utente).subscribe(
          data => {
            this.posts = data;
            this.postsArray.push(this.posts);
            this.postsArray = this.postsArray[0];
            this.sizePosts = this.postsArray.length;
          }
        );

        this.rispostaService.getRispostaByUtente(this.utente).subscribe(
          data => {
            console.log(data);
            this.risposte = data;
            this.risposteArray.push(this.risposte);
            this.risposteArray = this.risposteArray[0];
            this.sizeRisposte = this.risposteArray.length;
          }
        );
      }
    );

  }
}
