import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/partial/headers/headers.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodService } from './services/food.service';
@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
