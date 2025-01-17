import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component'

const routes: Routes = [
  { path: 'menu',     component: MenuComponent},
  { path:'home',component:HomeComponent},
  { path:'about',component:AboutComponent},
  { path:'events',component:EventsComponent},
  { path:'contact',component:ContactComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
