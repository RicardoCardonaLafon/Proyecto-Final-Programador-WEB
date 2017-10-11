import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LogeoComponent } from './logeo/logeo.component';
import { PrincipalComponent } from './principal/principal.component';
import { DetalladaComponent } from './detallada/detallada.component';
import { CarritoComponent } from './carrito/carrito.component';

import { RutasTienda } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LogeoComponent,
    PrincipalComponent,
    DetalladaComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RutasTienda
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
