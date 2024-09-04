import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EscalatorioRoutingModule } from './escalatorio-routing.module';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { EmpleadoPageComponent } from './pages/empleado-page/empleado-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewEmpleadoPageComponent } from './pages/new-empleado-page/new-empleado-page.component';
import { SearchEmpleadoPageComponent } from './pages/search-empleado-page/search-empleado-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    EmpleadoPageComponent,
    ListPageComponent,
    NewEmpleadoPageComponent,
    SearchEmpleadoPageComponent
  ],
  imports: [
    CommonModule,
    EscalatorioRoutingModule
  ]
})
export class EscalatorioModule { }
