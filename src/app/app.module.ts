import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { TokenSaleComponent } from './token-sale/token-sale.component';
import { DocsComponent } from './docs/docs.component';
import { RoadMapComponent } from './road-map/road-map.component';
import { GroupComponent } from './group/group.component';
import { DesktopComponent } from './desktop/desktop.component';
import { TeamComponent } from './team/team.component';
import { PartnersComponent } from './partners/partners.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FaqsComponent } from './faqs/faqs.component';
import { ContactComponent } from './contact/contact.component';

// import { FontAwesomeModule  } from '@fortawesome/angular-fontawesome/fontawesome.module';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    SecondComponent,
    ThirdComponent,
    TokenSaleComponent,
    DocsComponent,
    RoadMapComponent,
    GroupComponent,
    DesktopComponent,
    TeamComponent,
    PartnersComponent,
    FooterComponent,
    SubscribeComponent,
    FaqsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
