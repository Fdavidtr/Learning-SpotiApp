import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  artistas: any[];
  loading: boolean;

  constructor( private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino:string){
    this.loading = true;
    this._spotifyService.getAlbumByArtist({ artistName: termino })
    .subscribe(resp => {
      this.artistas = resp;
      this.loading = false;
    },
    error => {
      console.error('error',error);
      this.artistas = [];
      this.loading = false;
    })
  }
}
