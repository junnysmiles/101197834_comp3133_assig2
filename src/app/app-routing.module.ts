import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListingslistComponent } from './listingslist/listingslist.component';

const routes: Routes = [
  { path:'', component: ListingslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
