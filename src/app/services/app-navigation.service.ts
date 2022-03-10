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
}
