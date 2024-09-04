import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewEmpleadoPageComponent } from './pages/new-empleado-page/new-empleado-page.component';
import { SearchEmpleadoPageComponent } from './pages/search-empleado-page/search-empleado-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { EmpleadoPageComponent } from './pages/empleado-page/empleado-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'new-employee', component: NewEmpleadoPageComponent },
      { path: 'search', component: SearchEmpleadoPageComponent },
      { path: 'edit/:id', component: NewEmpleadoPageComponent },
      { path: 'list', component: ListPageComponent },
      { path: ':id', component: EmpleadoPageComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EscalatorioRoutingModule { }
