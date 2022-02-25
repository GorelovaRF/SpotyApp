import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch:'full'
  },
  {
    path: 'search',
    component: SearchComponent,
    pathMatch:'full'
  },
  {
    path: 'artist/:id',
    component: ArtistComponent,
  },
  {
    path: 'album/:id',
    component: AlbumComponent,
    pathMatch:'full'
  },
  {
    path: 'search/artist/:id',
    component: ArtistComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
