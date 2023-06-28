import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastheadComponent } from './components/masthead/masthead.component';
import { AdventureComponent } from './components/tour-types/adventure/adventure.component';
import { HikeComponent } from './components/tour-types/hike/hike.component';
import { LeisureComponent } from './components/tour-types/leisure/leisure.component';
import { TeambuildingComponent } from './components/tour-types/teambuilding/teambuilding.component';
import { SchoolsComponent } from './components/tour-types/schools/schools.component';
import { KindergartenComponent } from './components/tour-types/kindergarten/kindergarten.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CareerComponent } from './components/career/career.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  { path: "", component: MastheadComponent },
  { path: "adventure", component: AdventureComponent },
  { path: "hiking", component: HikeComponent },
  { path: "leisure", component: LeisureComponent },
  { path: "teambuilding", component: TeambuildingComponent },
  { path: "schools", component: SchoolsComponent },
  { path: "kindergarten", component: KindergartenComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "career", component: CareerComponent },
  { path: "contact", component: ContactComponent },
  
  // { path: "post/:id", component: PostDetailsComponent },
  
  { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
