import { Component, OnInit } from '@angular/core';

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
books = [
  {
    titolo: 'Il nome della Rosa',
    autore: 'Umberto',
    genere: 'giallo',
    isbn:'88454-4',
    trama: 'loren',
    page : 500,
    letto : 'OK'
  },
  {
    titolo: 'Il nome della Rosa2',
    autore: 'Umberto2',
    genere: 'giallo2',
    isbn:'88454-42',
    trama: 'loren2',
    page : 500,
    letto : 'NO'
  },   
];
  constructor() { }

  ngOnInit() {
  }

}