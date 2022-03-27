import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../../services/houses.service';

@Component({
  selector: 'vacant-houses',
  templateUrl: './vacant-houses.component.html',
  styleUrls: ['./vacant-houses.component.scss']
})
export class VacantHousesComponent implements OnInit {
  houses: any[] = [
    {id:1, name:"Rongai Hostels", image: "https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg", rooms: 5, full:false},
    {id:3, name:"Aberdare Hostels", image: "https://images.pexels.com/photos/1358853/pexels-photo-1358853.jpeg", rooms: 12, full:false}
  ]
  
  constructor(public houseService: HousesService) { }

  ngOnInit(): void {
  }

}
