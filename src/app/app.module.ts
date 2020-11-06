import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { UxpipePipe } from './uxpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    UxpipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
