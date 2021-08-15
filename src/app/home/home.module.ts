import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { BooksallComponent } from './booksall/booksall.component';
import { OutherBooksComponent } from './outher-books/outher-books.component';
import { HttpClientModule } from '@angular/common/http';
import { BoksgetService } from './booksall/boksget.service';
import { DetailBookComponent } from './detail-book/detail-book.component';
import { DetailChildComponent } from './detail-child/detail-child.component';
@NgModule({
  declarations: [
    HomeComponent,
    BooksallComponent,
    OutherBooksComponent,
    DetailBookComponent,
    DetailChildComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    HomeRoutingModule
  ],
  providers: [BoksgetService],
  exports: [HomeComponent]
})
export class HomeModule { }
