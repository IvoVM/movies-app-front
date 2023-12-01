import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieFilterByTitlePipe } from './pipes/movie-filter-by-title.pipe';
import { MovieFilterByDatePipe } from './pipes/movie-filter-by-date.pipe';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    HomeComponent,
    CarouselComponent,
    MovieDetailComponent,
    NavbarComponent,
    MovieFilterByTitlePipe,
    MovieFilterByDatePipe,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
