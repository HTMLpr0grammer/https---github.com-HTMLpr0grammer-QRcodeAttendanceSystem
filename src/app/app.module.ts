import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import BrowserAnimationsModule
import { MatTabsModule } from '@angular/material/tabs'; // Import MatTabsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component'; // Import MainComponent

@NgModule({
  declarations: [
    AppComponent,
    MainComponent // Include MainComponent in the declarations
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule to imports
    AppRoutingModule,
    MatTabsModule // Add MatTabsModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
