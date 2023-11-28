import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { FoodpageComponent } from './pages/foodpage/foodpage.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'search/:searchTerm',
    component:HomeComponent
  },
  {
    path:'tags/:tag',
    component:HomeComponent
  },
  {
    path:'food/:id',
    component:FoodpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
