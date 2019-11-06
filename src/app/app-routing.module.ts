import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Componentes/login/login.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { UsuarioModificarComponent } from './Componentes/usuario-modificar/usuario-modificar.component';
import { PDFComponent } from './Componentes/pdf/pdf.component';
import { InventarioModificarComponent } from './Componentes/inventario-modificar/inventario-modificar.component';
import { InventarioComponent } from './Componentes/inventario/inventario.component';
import { RuteoComponent } from './Componentes/ruteo/ruteo.component';
import { RuteoUbicacionComponent } from './Componentes/ruteo-ubicacion/ruteo-ubicacion.component';
import { VentasCreditosComponent } from './Componentes/ventas-creditos/ventas-creditos.component';
import { VentasCreditosDepositoComponent } from './Componentes/ventas-creditos-deposito/ventas-creditos-deposito.component';
import { ComprasComponent } from './Componentes/compras/compras.component';
import { EComprasComponent } from './Componentes/ecompras/ecompras.component';
import { EDComprasComponent } from './Componentes/edcompras/edcompras.component';
import { VentasComponent } from './Componentes/ventas/ventas.component';


const routes: Routes = [
  {path: 'Login', component: LoginComponent},
  {path: 'Dashboard', component: DashboardComponent},
  {path: 'Ruteo/Mapa', component: RuteoComponent},
  {path: 'Ruteo/AgregarUbicacion', component: RuteoUbicacionComponent},
  {path: 'Usuarios/Agregar', component: UsuarioComponent},
  {path: 'Usuarios/Modificar', component: UsuarioModificarComponent},
  {path: 'Inventario/Agregar', component: InventarioComponent},
  {path: 'Inventario/Modificar', component: InventarioModificarComponent},
  {path: 'Ventas/VentaCredito', component: VentasCreditosComponent},
  {path: 'Ventas/VentaDeposito', component: VentasCreditosDepositoComponent},
  {path: 'Compras', component: ComprasComponent},
  {path: 'ECompras', component: EComprasComponent},
  {path: 'EDCompras', component: EDComprasComponent},
  {path: 'Ventas', component: VentasComponent},
  {path: 'Pdf', component: PDFComponent},
  {path: '', pathMatch: 'full', redirectTo: 'Login'},
  {path: '**', pathMatch: 'full', redirectTo: 'Login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
