import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  albums:any[]
  loading:boolean
  constructor( private spotify:SpotifyService ) {

  }

  ngOnInit() {
    this.loading = true;
    this.spotify.getNewReleases().subscribe(resp=>{
      console.log(resp)
      this.albums = resp;
      this.loading = false;
    });
  }

}
