import { PostComponent } from './modules/post/post.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';


const routes: Routes = [
 { path:'',
   component:DefaultComponent,
   children:[{
    path:'',
    component:DashboardComponent
    },{
      path:'posts',
      component:PostComponent
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
