import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { AdminFooterComponent } from './components/admin-footer/admin-footer.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './admin.component';
import { AdminSidebarComponent } from './components/admin-sidebar/admin-sidebar.component';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { HousesComponent } from './components/houses/houses.component';
import { AllHousesComponent } from './components/houses/all-houses/all-houses.component';
import { AddHouseComponent } from './components/houses/add-house/add-house.component';
import { RoomsComponent } from './components/houses/rooms/rooms.component';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    HomeComponent,
    AdminSidebarComponent,
    HousesComponent,
    AllHousesComponent,
    AddHouseComponent,
    RoomsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
