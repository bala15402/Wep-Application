import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JaibheemComponent } from './jaibheem/jaibheem.component';
import { KarnanComponent } from './karnan/karnan.component';
import { KkkComponent } from './kkk/kkk.component';
import { LoginComponent } from './login/login.component';
import { MaanaduComponent } from './maanadu/maanadu.component';
import { MooComponent } from './moo/moo.component';
import { OhComponent } from './oh/oh.component';
import { ResisComponent } from './resis/resis.component';
import { SooComponent } from './soo/soo.component';
import { SpecialComponent } from './special/special.component';
import { To16Component } from './to16/to16.component';
import { To17Component } from './to17/to17.component';
import { To18Component } from './to18/to18.component';
import { To19Component } from './to19/to19.component';
import { TotoComponent } from './toto/toto.component';
import { ValimaiComponent } from './valimai/valimai.component';

const routes: Routes = [
  {path:"Login",component:LoginComponent},
  {path:"register",component:ResisComponent},
  {path:"forgot password",component:ForgotComponent},
  {path:"home",component:HomeComponent},
  {path:"maanadu",component:MaanaduComponent},
  {path:"valimai",component:ValimaiComponent},
  {path:"jaibheem",component:JaibheemComponent},
  {path:"karnan",component:KarnanComponent},
  {path:"toto",component:TotoComponent},
  {path:"soo",component:SooComponent},
  {path:"kkk",component:KkkComponent},
  {path:"moo",component:MooComponent},
  {path:"oh",component:OhComponent},
  {path:"to19",component:To19Component},
  {path:"to18",component:To18Component},
  {path:"to17",component:To17Component},
  {path:"to16",component:To16Component},
  {path:'events',component:EventsComponent},
  {path:'special',component:SpecialComponent},
  {path:'header',component:HeaderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
