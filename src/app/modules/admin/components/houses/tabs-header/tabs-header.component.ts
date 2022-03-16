import { Component, OnInit } from '@angular/core';
import { TabsNavigationService } from '../services/tabs-navigation.service';

@Component({
  selector: 'tabs-header',
  templateUrl: './tabs-header.component.html',
})
export class TabsHeaderComponent implements OnInit {
  constructor(public tavNavService: TabsNavigationService) {}

  ngOnInit(): void {}

  changeTab(tab: string) {
    this.tavNavService.changeTab(tab);
  }
}
