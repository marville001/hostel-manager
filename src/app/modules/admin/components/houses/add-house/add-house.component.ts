import { Component, OnInit } from '@angular/core';
import { HousesService } from '../../../services/houses.service';

@Component({
  selector: 'add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.scss']
})
export class AddHouseComponent implements OnInit {

  constructor(public houseService: HousesService) { }

  ngOnInit(): void {
  }

}
