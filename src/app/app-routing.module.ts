import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"contact", component: ContactUsComponent},
  {path:"**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
