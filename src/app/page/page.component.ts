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
    letto : 'OK',
    voto: 4
  },
  {
    titolo: 'Il nome della Rosa2',
    autore: 'Umberto2',
    genere: 'giallo2',
    isbn:'88454-42',
    trama: 'loren2',
    page : 500,
    letto : 'NO',
    voto : 3
  },   
];

grey:string;
myClass: Object;
red:string;

// le variabili vanno semrpe instanziat eall'interno del construttore
  constructor() { 
    this.grey = 'grey';
    this.myClass = {'textAlign':'center','color':'red'};
    this.red = 'red';
  }

  ngOnInit() {
  }

}