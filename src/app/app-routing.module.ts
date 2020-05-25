import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { DescriptionComponent } from './description/description.component';


const routes: Routes = [
  {path:'', component: CartComponent},
  {path:'description/:pdtId', component: DescriptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
