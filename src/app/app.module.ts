import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './components/utente/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegistrationComponent} from './components/utente/registration/registration.component';
import {TopBarComponent} from './components/generic/top-bar/top-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForumComponent } from './components/forum/forum/forum.component';
import { PostPageComponent } from './components/forum/post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    TopBarComponent,
    ForumComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
