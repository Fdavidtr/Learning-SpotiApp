import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../../services/spotify.service'

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {

  @Input() albums:Album[]

  constructor() { }

  ngOnInit() {
  }

}
