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
import { SingleHouseComponent } from './components/houses/single-house/single-house.component';
import { VacantHousesComponent } from './components/houses/vacant-houses/vacant-houses.component';
import { AdminService } from './services/admin.service';

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
    SingleHouseComponent,
    VacantHousesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
