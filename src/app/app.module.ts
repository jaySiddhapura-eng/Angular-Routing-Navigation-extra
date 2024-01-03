import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentAComponent } from './component.a/component.a.component';
import { ComponentPComponent } from './component.p/component.p.component';
import { ComponentCComponent } from './component.c/component.c.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ComponentQComponent } from './component.q/component.q.component';
import { ComponentYComponent } from './component.y/component.y.component';
import { ComponentZComponent } from './component.z/component.z.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentAComponent,
    ComponentCComponent,
    ComponentPComponent,
    ComponentQComponent,
    ComponentYComponent,
    ComponentZComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
