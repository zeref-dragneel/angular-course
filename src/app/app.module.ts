import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MySecondComponentComponent } from './my-second-component/my-second-component.component';
import { InterpolateComponent } from './interpolate/interpolate.component';
import { DatabindComponent } from './databind/databind.component';
import { EventbindComponent } from './eventbind/eventbind.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MySecondComponentComponent,
    InterpolateComponent,
    DatabindComponent,
    EventbindComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
