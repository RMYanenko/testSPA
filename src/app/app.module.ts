import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterComponent } from './componnents/filter/filter.component';
import { HeaderComponent } from './componnents/header/header.component';
import { CocktailsComponent } from './componnents/cocktails/cocktails.component';
import { MainLayoutComponent } from './componnents/main-layout/main-layout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FilterComponent,
    HeaderComponent,
    CocktailsComponent,
    MainLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
