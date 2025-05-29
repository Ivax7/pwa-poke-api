import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentListComponent } from './component-list/component-list.component';
import { ComponentDetailComponent } from './component-detail/component-detail.component';

const routes: Routes = [
  { path: '', component: ComponentListComponent },
  { path: 'pokemon/:id', component: ComponentDetailComponent },
  { path: '**', component: ComponentListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
