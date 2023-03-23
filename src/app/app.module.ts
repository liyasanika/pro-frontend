import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './units/navbar/navbar.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdaviComponent } from './pages/adavi/adavi.component';
import { CageComponent } from './pages/cage/cage.component';
import { GaviComponent } from './pages/gavi/gavi.component';
import { RegformComponent } from './pages/regform/regform.component';
import { FooterComponent } from './units/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AdoorComponent } from './pages/adoor/adoor.component';
import { JenishComponent } from './pages/jenish/jenish.component';
import { NoohComponent } from './pages/nooh/nooh.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DestinationComponent,
    AboutComponent,
    ContactComponent,
    AdaviComponent,
    CageComponent,
    GaviComponent,
    RegformComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    AdoorComponent,
    JenishComponent,
    NoohComponent,
    GalleryComponent,
  
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
