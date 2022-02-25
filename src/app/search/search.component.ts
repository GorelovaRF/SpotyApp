import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  releases!: any[];
  public searchQuery!: string;
  public artists!: any[];
  constructor(protected service: SpotifyService) { }

  ngOnInit(): void {
  }

  public searchArtists() {
    this.service.getAllArtists(this.searchQuery).subscribe( res => {
      this.artists = res.artists.items;
      console.log(this.artists)
    })


  }

}
