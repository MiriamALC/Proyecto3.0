import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { MenuComponent } from './Componentes/menu/menu.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { UsuarioModificarComponent } from './Componentes/usuario-modificar/usuario-modificar.component';
import { PDFComponent } from './Componentes/pdf/pdf.component';
import { InventarioComponent } from './Componentes/inventario/inventario.component';
import { InventarioModificarComponent } from './Componentes/inventario-modificar/inventario-modificar.component';


import { AgmCoreModule } from '@agm/core';
import { RuteoComponent } from './Componentes/ruteo/ruteo.component';
import { RuteoUbicacionComponent } from './Componentes/ruteo-ubicacion/ruteo-ubicacion.component';
import { VentasCreditosComponent } from './Componentes/ventas-creditos/ventas-creditos.component';
import { VentasCreditosDepositoComponent } from './Componentes/ventas-creditos-deposito/ventas-creditos-deposito.component';

import { ComprasComponent } from './Componentes/compras/compras.component';
import { EComprasComponent } from './Componentes/ecompras/ecompras.component';
import { EDComprasComponent } from './Componentes/edcompras/edcompras.component';
import { VentasComponent } from './Componentes/ventas/ventas.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {path: '', component: AppComponent, pathMatch: 'full'},
  {path: 'ECompras', component: EComprasComponent},
  {path: 'Compras', component: ComprasComponent},
  {path: 'EDCompras/:id', component: EDComprasComponent},
  {path: 'Ventas', component: VentasComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    MenuComponent,
    DashboardComponent,
    UsuarioComponent,
    UsuarioModificarComponent,
    PDFComponent,
    InventarioComponent,
    InventarioModificarComponent,
    RuteoComponent,
    RuteoUbicacionComponent,
    VentasCreditosComponent,
    VentasCreditosDepositoComponent,
    ComprasComponent,
    EComprasComponent,
    EDComprasComponent,
    VentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule ,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAckvA-sOJiqBDeWD4JwiK2Uq7dAGG22jc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
