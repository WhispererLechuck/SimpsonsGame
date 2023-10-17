import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { GameComponent } from './game/game.component';

import { HomeComponent } from './home/home.component';
import { SpinnerComponent } from './game/spinner/spinner/spinner.component';
import { GameOverComponent } from './game/game-over/game-over.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    GameComponent,
    HomeComponent,
    SpinnerComponent,
    GameOverComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
