import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistryComponent } from './registry/registry.component';

export const routes: Routes = [
  { path: '', component: RegistryComponent },
  { path: 'registry/new', component: RegistryComponent },
  { path: 'registry/:id', component: RegistryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
