import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import * as cors from 'cors';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  
  token = 'BQCvLZgHGlHUgArTEjSyyRfTzNWQoMdqvx7Yk_4EFuldcUBTDGUKBkfLVvmgmuEVbp8pOgksiyZux6NwMVDvR5K7q1YcUiPcebTfjx-BFIf7kSyz88w3882VTjNFCYY66fTGauZVjGw8_X58k2ZyLpuT6hb7lvZ31a0'
  isLoading = new Subject<boolean>();
  
  
  constructor(protected http: HttpClient) { }



  getNewReleases(): Observable<any>{
    const url = 'https://api.spotify.com/v1/browse/new-releases?country=RU&limit=20';

    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token
    });

    return ( this.http.get<any>(url,{headers}));

 
  }

  public getAllArtists(searchQuery: any): Observable<any> {

 
    const artistURL:string = `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token ,
      
    });
  
    return this.http.get<any>(artistURL,{headers});
  }

  public getArtistById(id:any): Observable<any> {
    const url: string = `https://api.spotify.com/v1/artists/${id}`
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token ,
      
    });

    return this.http.get<any>(url,{headers});

  }

  public getAlbumById(id:any): Observable<any> {
    const url: string = `https://api.spotify.com/v1/albums/${id}`
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token ,
      
    });

    return this.http.get<any>(url,{headers});

  }

  public getArtistsTracks(id:any): Observable<any> {
    const url: string = `https://api.spotify.com/v1/artists/${id}/top-tracks?market=RU`
    const headers = new HttpHeaders({
      'authorization': 'Bearer ' + this.token ,
      
    });

    return this.http.get<any>(url,{headers})
  }

  show():void{
    this.isLoading.next(true)
  }
  hide():void{
    this.isLoading.next(false)
  }
}
