import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../../services/houses.service';

@Component({
  selector: 'all-houses',
  templateUrl: './all-houses.component.html',
  styleUrls: ['./all-houses.component.scss']
})
export class AllHousesComponent implements OnInit {
  houses: any[] = [
    {id:1, name:"Rongai Hostels", image: "https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg", rooms: 5, full:false},
    {id:2, name:"Kikuyu Hostels", image: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg", rooms: 24, full:true},
    {id:3, name:"Aberdare Hostels", image: "https://images.pexels.com/photos/1358853/pexels-photo-1358853.jpeg", rooms: 12, full:false},
    {id:4, name:"Kenns Hostels", image: "https://images.pexels.com/photos/4061979/pexels-photo-4061979.jpeg", rooms: 10, full:true},
  ]
  
  constructor(public houseService: HousesService) { }

  ngOnInit(): void {
  }

}
