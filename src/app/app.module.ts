import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/partial/headers/headers.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodService } from './services/food.service';
import { SearchComponent } from './components/partial/search/search.component';
import { TagsComponent } from './partial/headers/tags/tags.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
