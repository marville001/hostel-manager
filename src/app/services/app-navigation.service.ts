import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppNavigationService {
  public sideBarOpen = true;

  constructor() {}

  toggleSideBarOpen(): void {
    this.sideBarOpen = !this.sideBarOpen;
  }

  closeSideBar(): void {
    this.sideBarOpen = false;
  }

  openSideBar(): void {
    this.sideBarOpen = true;
  }



}
