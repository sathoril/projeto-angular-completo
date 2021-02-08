import { LoginComponent } from './login/login.component';
import { NaoEncontradoComponent } from './shared/nao-encontrado/nao-encontrado.component';
import { HomeComponent } from './shared/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from 'src/app/shared/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: MenuComponent },
  { path: 'home', component: NaoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
