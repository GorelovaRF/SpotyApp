import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../service/spotify.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album:any
  constructor(protected activateRoute: ActivatedRoute, protected service: SpotifyService, protected location: Location) { }

  ngOnInit(): void {

    const id:any = this.activateRoute.params.subscribe(res => {
      let id = res['id'];
      this.service.getAlbumById(id).subscribe(res => {
        this.album=res;
        console.log(res);
      })

    })
  }

  goBack() {
    this.location.back();

  }

}
