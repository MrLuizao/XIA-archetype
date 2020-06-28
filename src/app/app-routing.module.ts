import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProveedorComponent } from './pages/proveedor/proveedor.component';
import { ComprasComponent } from './pages/compras/compras.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

const routes: Routes = [

  { path: 'login', component: LoginPageComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'proveedor', component: ProveedorComponent},
  { path: 'compras', component: ComprasComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
