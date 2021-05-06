import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { MoviesService } from './services/movies.service';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from './modules/material/material.module'; 
import { AuthGuard } from './pipes_&_guards/auth.guard';
import { FilterPipe } from './pipes_&_guards/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [
    AuthService, 
    MoviesService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
