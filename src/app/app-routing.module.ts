import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { AddProductComponent } from './components/product/add-product.component';
import { EditProductComponent } from './components/product/edit-product.component';
import { ProductComponent } from './components/product/product.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'product/add', component: AddProductComponent },
  { path: 'product/update/:id', component: EditProductComponent },
  { path: '***', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
