import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './components/partial/headers/headers.component';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodService } from './services/food.service';
import { SearchComponent } from './components/partial/search/search.component';
import { TagsComponent } from './partial/headers/tags/tags.component';
import { FoodpageComponent } from './pages/foodpage/foodpage.component';
import { CartService } from './services/cart.service';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { TitleComponent } from './components/partial/title/title.component';


@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    FoodpageComponent,
    CartPageComponent,
    TitleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [FoodService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
