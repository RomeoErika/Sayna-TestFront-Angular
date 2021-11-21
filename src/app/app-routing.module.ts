import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainViewsComponent } from './components/main-views/main-views.component';


const routes: Routes = [
  {
    path:'',
    component: MainViewsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
