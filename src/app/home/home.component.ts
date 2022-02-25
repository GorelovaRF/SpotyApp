import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  releases!: any[];
 

  constructor(protected service: SpotifyService) {
    this.service.getNewReleases().subscribe((res: any) => {
      this.releases = res.albums.items;
      console.log(this.releases)
    
    })
   }

  ngOnInit(): void {
  }

}
