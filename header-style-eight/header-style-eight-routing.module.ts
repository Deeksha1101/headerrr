import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderStyleEightPage } from './header-style-eight.page';

const routes: Routes = [
  {
    path: '',
    component: HeaderStyleEightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeaderStyleEightPageRoutingModule {}
