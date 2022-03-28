import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousesService {
  public isSorting: boolean = false;
  public isSearching: boolean = false;
  public sortBy: string = "";
  public addHouseModalOpen: boolean = false;

  constructor() { }
}
