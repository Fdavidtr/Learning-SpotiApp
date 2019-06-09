import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = "BQCfkSqeEAr6YzCkJWt35lRW7j4v9s2u7GOrSQi52zEh7ssUXg9i8O2OABs8b0ER3lRZOARr5XJbPGKR9tU"
  headers: HttpHeaders
  private debounce: number
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    })
  }

  private _getRequest(query:string, method: string = 'get' , params?: object): Observable<any> {
    const baseUrl = 'https://api.spotify.com/v1/'
    return this.http[method].call(this.http, `${baseUrl}${query}` , { headers: this.headers, params });
  }

  getNewReleases(): Observable<Album[]> {
    /* const observerInner = observer =>
      this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: this.headers }).subscribe(
        (resp:{albums:{items:Album[]}}) => {
          observer.next(resp.albums.items)
        });
    return new Observable(observerInner) */
    return this._getRequest('browse/new-releases', 'get', {limit:'20'} ).pipe(
      map((resp:{albums:{items:Album[]}}) => resp.albums.items)
    );
  }

  getArtist(id:string): Observable<any> {
    return this._getRequest(`artists/${id}`, 'get');
  }

  getTopTrucks(id:string): Observable<any> {
    return this._getRequest(`artists/${id}/top-tracks`, 'get' , {limit: '8', country: 'ES'}).pipe(
      map( resp => resp.tracks )
    );
  }

  getAlbumByArtist({ artistName, debounce = true }: { artistName: string; debounce?: boolean; }): Observable<any[]> {
    /* const observerInner = observer =>
    this.http.get('https://api.spotify.com/v1/search', { headers: this.headers, params: {q: artistName, type: 'artist', limit: '15'} }).subscribe(
      (resp:{artists:{items:any[]}}) => {
        observer.next(resp.artists.items)
      });
    return new Observable(observerInner) */
    return this._getRequest('search','get', {q: artistName, type: 'artist', limit: '15'}).pipe(
      map((resp:{artists:{items:Album[]}}) => resp.artists.items)
    );
  }
}

export interface Album  {
  album_type: string
  artists?: any[]
  available_markets: string[]
  external_urls: {spotify: string}
  href: string
  id: string
  images: any[]
  name: string
  release_date: string
  release_date_precision: string
  total_tracks: number
  type: string
  uri: string
}
