import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'not-found',
    loadChildren: () => import('./components/not-found/not-found.module').then(m => m.NotFoundModule),
  },
  {
    path: 'server-error',
    loadChildren: () => import('./components/server-error/server-error.module').then(m => m.ServerErrorModule),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
