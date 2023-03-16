import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DestinationComponent } from './pages/destination/destination.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdaviComponent } from './pages/adavi/adavi.component';
import { CageComponent } from './pages/cage/cage.component';
import { GaviComponent } from './pages/gavi/gavi.component';
import { RegformComponent } from './pages/regform/regform.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { AdoorComponent } from './pages/adoor/adoor.component';
import { JenishComponent } from './pages/jenish/jenish.component';
import { NoohComponent } from './pages/nooh/nooh.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
const routes: Routes = [
  {
    path:'',component: HomeComponent
  },
  {
    path:'destination',component: DestinationComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'adavi',component:AdaviComponent
  },
  {
    path:'cage',component:CageComponent
  },
  {
    path:'gavi',component:GaviComponent
  },
  {
    path:'regform',component:RegformComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'adoor',component:AdoorComponent
  },
  {
    path:'jenish',component:JenishComponent
  },
  {
    path:'nooh',component:NoohComponent
  },
  {
    path:'gallery',component:GalleryComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
