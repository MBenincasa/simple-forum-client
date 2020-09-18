import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/utente/login/login.component';
import {RegistrationComponent} from './components/utente/registration/registration.component';
import {ForumComponent} from './components/forum/forum/forum.component';
import {PostPageComponent} from './components/forum/post-page/post-page.component';
import {NewPostComponent} from './components/forum/new-post/new-post.component';


const routes: Routes = [
  {path: '', redirectTo: 'forum', pathMatch: 'full'},
  {path: 'forum', component: ForumComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'post-details/:id', component: PostPageComponent},
  {path: 'new-post/:id', component: NewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
