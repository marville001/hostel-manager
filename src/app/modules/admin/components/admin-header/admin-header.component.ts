import { Component, OnInit } from '@angular/core';
import { AppNavigationService } from 'src/app/services/app-navigation.service';

@Component({
  selector: 'admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: [],
})
export class AdminHeaderComponent implements OnInit {
  constructor(public appNavigationService: AppNavigationService) {}

  ngOnInit(): void {}

}
