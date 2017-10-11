import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LogeoComponent } from './logeo/logeo.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetalladaComponent } from './detallada/detallada.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent},
  { path: 'elcarrito', component: CarritoComponent},
  { path: 'logearse', component: LogeoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class RutasTienda { }
