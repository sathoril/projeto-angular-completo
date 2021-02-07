import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NaoEncontradoComponent } from './nao-encontrado/nao-encontrado.component';
import { MenuComponent } from 'src/app/shared/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  declarations: [
    NaoEncontradoComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent
  ],
  exports: [
    NaoEncontradoComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent
  ]
})
export class SharedModule { }
