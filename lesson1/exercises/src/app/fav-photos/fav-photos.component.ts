import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images PNW';
  image1 = 'http://junipertreestudio.com/wp-content/uploads/2016/10/DSC_1241-Version-2-1.jpg';
  image2 = 'http://junipertreestudio.com/wp-content/uploads/2016/10/spider-web.jpg';
  image3 = 'http://junipertreestudio.com/wp-content/uploads/2016/10/DSC_1112-Version-2.jpg';

  constructor() { }

  ngOnInit() {
  }

}