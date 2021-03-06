import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './components/home/home.component';
import { AllHousesComponent } from './components/houses/all-houses/all-houses.component';
import { HousesComponent } from './components/houses/houses.component';
import { RoomsComponent } from './components/houses/rooms/rooms.component';
import { SingleHouseComponent } from './components/houses/single-house/single-house.component';
import { VacantHousesComponent } from './components/houses/vacant-houses/vacant-houses.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'houses',
        component: HousesComponent,
        children: [
          { path: '', redirectTo: '/admin/houses/all', pathMatch: 'full' },
          { path: 'all', component: AllHousesComponent },
          { path: 'vacant', component: VacantHousesComponent },
          { path: 'rooms', component: RoomsComponent },
          { path: ':id', component: SingleHouseComponent },
          { path: '**', redirectTo: '/admin/houses/all', pathMatch: 'full' },
        ],
      },
      { path: 'tenants', component: HomeComponent },
      { path: '**', redirectTo: '/admin/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
