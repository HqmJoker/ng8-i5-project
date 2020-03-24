import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', data:{preload:false},loadChildren: () => import('src/pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'test', data:{preload:false},loadChildren: () => import('src/pages/home/test/test.module').then( m => m.TestPageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
