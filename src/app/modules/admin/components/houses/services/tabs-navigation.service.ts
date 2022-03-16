import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabsNavigationService {
  public openTab:string = "houses";

  constructor() { }

  changeTab(tab:string):void{
    this.openTab = tab;
  }
}
