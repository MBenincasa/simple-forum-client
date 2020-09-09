import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/utente/login/login.component';
import {RegistrationComponent} from './components/utente/registration/registration.component';
import {ForumComponent} from './components/forum/forum/forum.component';


const routes: Routes = [
  {path: '', redirectTo: 'forum', pathMatch: 'full'},
  {path: 'forum', component: ForumComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
