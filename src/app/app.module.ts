import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import {TieredMenuModule} from 'primeng/tieredmenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TieredMenuModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
