import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './component/header/header.component';
import { CardComponent } from './component/card/card.component';
import { FormsModule } from '@angular/forms';
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { CardArtistComponent } from './component/card-artist/card-artist.component';
import { SafePipe } from './pipes/safe.pipe';
import { SpinnerComponent } from './component/spinner/spinner.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptor } from './component/interceptor/spinner.interceptor';
import { ErrorInterceptor } from './component/interceptor/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    HeaderComponent,
    CardComponent,
    SinfotoPipe,
    ArtistComponent,
    AlbumComponent,
         CardArtistComponent,
         SafePipe,
         SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,useClass: SpinnerInterceptor, multi:true},
    {provide: HTTP_INTERCEPTORS,useClass: ErrorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
