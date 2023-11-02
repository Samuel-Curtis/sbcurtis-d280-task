import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './Components/map/map.component';
import { DataDisplayComponent } from './Components/data-display/data-display.component';
import { MainComponent } from './Page/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    DataDisplayComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
