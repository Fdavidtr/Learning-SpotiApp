import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() item: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goArtistView(id: string) {
    this.router.navigate(['/artist', id]);
  }

  handleCardClick() {
    if(this.item.type === 'artist'){
      this.goArtistView(this.item.id);
    }
  }
}
