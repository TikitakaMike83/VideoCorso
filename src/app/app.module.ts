import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavComponent } from './nav/nav.component';
import { PageComponent } from './page/page.component';
import { TruncPipe } from './page/trunc.pipe'; 
import { BookService } from './services/book.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,HelloComponent, NavComponent, PageComponent,TruncPipe],
  providers: [BookService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
