import { Component, HostListener, OnInit } from '@angular/core';
import { AppNavigationService } from 'src/app/services/app-navigation.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: [],
})
export class AdminComponent implements OnInit {
  constructor(public appNavigationService: AppNavigationService) {}

  ngOnInit(): void {
    if (window.innerWidth <= 1025) {
      this.appNavigationService.closeSideBar();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 1025) {
      this.appNavigationService.closeSideBar();
    } else {
      this.appNavigationService.openSideBar();
    }
  }
}
