import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './components/utente/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegistrationComponent} from './components/utente/registration/registration.component';
import {TopBarComponent} from './components/generic/top-bar/top-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForumComponent } from './components/forum/forum/forum.component';
import { PostPageComponent } from './components/forum/post-page/post-page.component';
import { NewPostComponent } from './components/forum/new-post/new-post.component';
import {DatePipe} from '@angular/common';
import { NewRispostaComponent } from './components/forum/new-risposta/new-risposta.component';
import { RispostePageComponent } from './components/forum/risposte-page/risposte-page.component';
import { ProfileComponent } from './components/utente/profile/profile.component';
import { ProfileFeedComponent } from './components/utente/profile-feed/profile-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    TopBarComponent,
    ForumComponent,
    PostPageComponent,
    NewPostComponent,
    NewRispostaComponent,
    RispostePageComponent,
    ProfileComponent,
    ProfileFeedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    FormsModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
