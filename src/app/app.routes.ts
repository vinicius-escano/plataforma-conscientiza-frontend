import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchoneComponent } from './researchone/researchone.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ResearchtwoComponent } from './researchtwo/researchtwo.component';
import { ResearchthreeComponent } from './researchthree/researchthree.component';
import { AnalisysComponent } from './analisyspage/analisys.component';

export const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'researchOne', component: ResearchoneComponent },
  { path: 'researchTwo', component: ResearchtwoComponent },
  { path: 'researchThree', component: ResearchthreeComponent },
  { path: 'analisys', component: AnalisysComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // redirect to `first-component`
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }