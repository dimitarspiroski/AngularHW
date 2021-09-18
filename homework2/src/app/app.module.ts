import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { ListComponent } from './components/list/list.component';
import { AbbreviatePipe } from './pipes/abbreviate.pipe';

@NgModule({
  declarations: [AppComponent, GameComponent, ListComponent, AbbreviatePipe],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
