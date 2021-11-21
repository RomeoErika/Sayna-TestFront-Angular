import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { PayementsComponent } from './components/payements/payements.component';
import { MainViewsComponent } from './components/main-views/main-views.component';
import { CreditComponent } from './components/credit/credit.component';
import { RecentActivityComponent } from './components/recent-activity/recent-activity.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  declarations: [
    AppComponent,
    NavigationsComponent,
    PayementsComponent,
    MainViewsComponent,
    CreditComponent,
    RecentActivityComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


