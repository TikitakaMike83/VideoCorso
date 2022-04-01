import { Injectable } from '@angular/core';


@Injectable()
export class BookService {
  getBooks() {
    return  [
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
      }
    ];
  }
  constructor() { }

}