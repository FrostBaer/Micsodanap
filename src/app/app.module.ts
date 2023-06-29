import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TourListComponent } from './components/tour-list/tour-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { MastheadComponent } from './components/masthead/masthead.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CareerComponent } from './components/career/career.component';
import { HikeComponent } from './components/tour-types/hike/hike.component';
import { AdventureComponent } from './components/tour-types/adventure/adventure.component';
import { LeisureComponent } from './components/tour-types/leisure/leisure.component';
import { TeambuildingComponent } from './components/tour-types/teambuilding/teambuilding.component';
import { SchoolsComponent } from './components/tour-types/schools/schools.component';
import { KindergartenComponent } from './components/tour-types/kindergarten/kindergarten.component';
import { GyikComponent } from './components/gyik/gyik.component';
import { ContactComponent } from './components/contact/contact.component';
import { FamilyComponent } from './components/tour-types/family/family.component';
import { FreeComponent } from './components/tour-types/free/free.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TourListComponent,
    FooterComponent,
    MastheadComponent,
    GalleryComponent,
    CareerComponent,
    HikeComponent,
    AdventureComponent,
    LeisureComponent,
    TeambuildingComponent,
    SchoolsComponent,
    KindergartenComponent,
    GyikComponent,
    ContactComponent,
    FamilyComponent,
    FreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
