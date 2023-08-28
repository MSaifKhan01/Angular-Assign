import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostPageComponent } from './post-page/post-page.component';
import { DisplaypageComponent } from './displaypage/displaypage.component';


const routes: Routes = [
  {path:'',component:DisplaypageComponent},
  {path:'create',component:PostPageComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
