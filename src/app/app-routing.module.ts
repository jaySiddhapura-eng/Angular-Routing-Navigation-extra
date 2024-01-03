import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentAComponent } from './component.a/component.a.component';
import { ComponentPComponent } from './component.p/component.p.component';
import { ComponentCComponent } from './component.c/component.c.component';
import { ComponentQComponent } from './component.q/component.q.component';
import { ComponentZComponent } from './component.z/component.z.component';
import { ComponentYComponent } from './component.y/component.y.component';

const routes: Routes = [
  { path: 'ComponentA', component: ComponentAComponent},
  { path: 'ComponentC', component: ComponentCComponent },

  { path: 'ComponentP', component: ComponentPComponent },
  { path: 'ComponentQ', component: ComponentQComponent },

  { path: 'ComponentY', component: ComponentYComponent },
  { path: 'ComponentZ', component: ComponentZComponent },
  { path: 'ComponentZ/:id/:label/:role/:pid/:gid', component: ComponentZComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
