import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../service/spotify.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any;
  tracks: any[] = []
  constructor(protected activateRoute: ActivatedRoute, protected service: SpotifyService, protected location:Location) { }

  ngOnInit(): void {

    const id:any = this.activateRoute.params.subscribe(res => {
      let id = res['id'];
      this.service.getArtistById(id).subscribe(res => {
        this.artist = res
        console.log(this.artist);
      })

      this.service.getArtistsTracks(id).subscribe(res => {
        this.tracks = res.tracks;
        console.log("TRACKS",this.tracks)

      })

    })
  }

  goBack() {
    this.location.back();

  }
}
