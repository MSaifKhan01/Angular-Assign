import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurentMenuComponent } from './restaurent-menu/restaurent-menu.component';
import { CartpageComponent } from './cartpage/cartpage.component';
const routes: Routes = [
  {path:"",component:RestaurentMenuComponent},
  {path:"cart",component:CartpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
