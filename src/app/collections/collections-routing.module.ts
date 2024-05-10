import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { BiographyComponent } from './biography/biography.component';
import { companiesComponent } from './companies/companies.component';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  {
     path: '', 
     component: CollectionsHomeComponent,
     children: [
      {path: '', component: BiographyComponent},
      {path: 'companies', component: companiesComponent},
      {path: 'partners', component: PartnersComponent}
     ]
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class COllectionsRoutingModule { }
