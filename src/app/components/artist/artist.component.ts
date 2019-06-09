import { SpotifyService } from './../../services/spotify.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  artist: any;
  id: string;
  topTracks: any;

  constructor( private _activatedRoute: ActivatedRoute, private spotify: SpotifyService) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params => {
      this.id = params.id;
      this.getArtist();
      this.getTopTracks();
    })
  }
  getArtist() {
    const id = this.id;
    this.spotify.getArtist(id).subscribe( resp => {
      this.artist = resp;
    },
    error => {
      alert('error');
      console.error(error);
    });
  }
  getTopTracks() {
    const id = this.id;
    this.spotify.getTopTrucks(id).subscribe( resp => {
      this.topTracks = resp;
      console.log(this);
    },
    error => {
      alert('error');
      console.error(error);
    });
  }

}
