import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  link1: string;
  link2: string;
  link3: string;
  constructor() {
    this.link1 = 'page1';
    this.link2 = 'page2';
    this.link3 = 'page3';
   }

  ngOnInit() {
  }

}