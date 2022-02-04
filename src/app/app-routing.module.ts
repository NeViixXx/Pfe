import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { LinkComponent } from './link/link.component';

const routes: Routes = [{path:'body' , component:BodyComponent},
{path:'' , component:BodyComponent},
{path:'link' , component:LinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
