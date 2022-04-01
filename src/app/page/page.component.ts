import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
news = [
  'Notizia1',
  'Notizia2',
  'Notizia3'
];
books = [];

grey:string;
myClass: Object;
red:string;

oggi:Date;
books2: object;
text:string;
// le variabili vanno semrpe instanziat eall'interno del construttore
  constructor(service: BookService) { 
    this.books = service.getBooks();
    this.text = 'ciao come stai';
    this.books2 = {titolo: 'Il nome della Rosa', autore: 'Umberto'};
    this.grey = 'grey';
    this.myClass = {'textAlign':'center','color':'red'};
    this.red = 'red';
    this.oggi= new Date();
  }

  ngOnInit() {
  }

}