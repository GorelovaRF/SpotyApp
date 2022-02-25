import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-artist',
  templateUrl: './card-artist.component.html',
  styleUrls: ['./card-artist.component.css']
})
export class CardArtistComponent implements OnInit {
  
  @Input()

  public a: any;
  constructor() { }

  ngOnInit(): void {
  }

}
