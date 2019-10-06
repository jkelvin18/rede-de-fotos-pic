import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PhotosModule } from './photos/photos.module';
import { ErrorsModule } from './errors/errors.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    HomeModule,
    BrowserModule,
    AppRoutingModule,
    PhotosModule,
    ErrorsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
