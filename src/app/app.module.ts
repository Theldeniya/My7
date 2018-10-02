import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './navbar/navbar.component';
import {MatCheckboxModule} from '@angular/material';
import { CtgryComponent } from './ctgry/ctgry.component';
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CtgryComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatGridListModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
