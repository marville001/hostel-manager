import { Component, OnInit } from '@angular/core';
import { AppNavigationService } from 'src/app/services/app-navigation.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: []
})
export class AdminComponent implements OnInit {

  constructor(public appNavigationService: AppNavigationService) { }

  ngOnInit(): void {
  }

}
