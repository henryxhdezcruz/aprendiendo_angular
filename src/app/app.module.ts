import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { PhotosComponent } from './components/photos/photos.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarSucursalComponent } from './components/toolbar-sucursal/toolbar-sucursal.component';
import { MenuDepartamentosComponent } from './components/menu-departamentos/menu-departamentos.component';
import { HomeComponent } from './components/home/home.component';
import { CarruselBannersComponent } from './components/carrusel-banners/carrusel-banners.component';
import { WhatsappBtnComponent } from './components/whatsapp-btn/whatsapp-btn.component'
 
@NgModule({
  declarations: [
    AppComponent,
    PhotosComponent,
    CardProductComponent,
    NavbarComponent,
    ToolbarSucursalComponent,
    MenuDepartamentosComponent,
    HomeComponent,
    CarruselBannersComponent,
    WhatsappBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
