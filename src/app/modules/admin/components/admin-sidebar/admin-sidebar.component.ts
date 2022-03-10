import { Component, OnInit } from '@angular/core';
import { AppNavigationService } from 'src/app/services/app-navigation.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
})
export class AdminSidebarComponent implements OnInit {
  constructor(public appNavigationService: AppNavigationService) {}

  ngOnInit(): void {}
}
