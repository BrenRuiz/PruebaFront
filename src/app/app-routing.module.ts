import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './customer/pages/create/create.component';
import { ReadComponent } from './customer/pages/read/read.component';
import { UpdateComponent } from './customer/pages/update/update.component';

const routes: Routes = [
  {
    path: '',
    component: ReadComponent,
    pathMatch: 'full'
  },
  {path: 'home', component: ReadComponent},
  {path: 'add', component: CreateComponent},
  {path: 'update/:id', component: CreateComponent},
  {path: 'updatee/', component: UpdateComponent},
  {path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
