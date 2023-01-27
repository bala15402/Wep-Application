import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ResisComponent } from './resis/resis.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { MaanaduComponent } from './maanadu/maanadu.component';
import { ValimaiComponent } from './valimai/valimai.component';
import { JaibheemComponent } from './jaibheem/jaibheem.component';
import { KarnanComponent } from './karnan/karnan.component';
import { TotoComponent } from './toto/toto.component';
import { MooComponent } from './moo/moo.component';
import { SooComponent } from './soo/soo.component';
import { KkkComponent } from './kkk/kkk.component';
import { OhComponent } from './oh/oh.component';
import { To19Component } from './to19/to19.component';
import { To18Component } from './to18/to18.component';
import { To17Component } from './to17/to17.component';
import { To16Component } from './to16/to16.component';
import { EventsComponent } from './events/events.component';
import { SpecialComponent } from './special/special.component';
import { DbutilityService } from './dbutility.service';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ResisComponent,
    ForgotComponent,
    HomeComponent,
    MaanaduComponent,
    ValimaiComponent,
    JaibheemComponent,
    KarnanComponent,
    TotoComponent,
    MooComponent,
    SooComponent,
    KkkComponent,
    OhComponent,
    To19Component,
    To18Component,
    To17Component,
    To16Component,
    EventsComponent,
    SpecialComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DbutilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
