import { Component, OnInit } from '@angular/core';
import { TabsNavigationService } from './services/tabs-navigation.service';

@Component({
  selector: 'houses',
  templateUrl: './houses.component.html'
})
export class HousesComponent implements OnInit {
 
  constructor(public tavNavService: TabsNavigationService) { }

  ngOnInit(): void {
  }

}
