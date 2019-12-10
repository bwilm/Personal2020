import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeroComponent } from './hero/hero.component';
import { BioComponent } from './bio/bio.component';
import { NavComponent } from './nav/nav.component';
import { ProjectsComponent } from './projects/projects.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SocialsComponent } from './socials/socials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    BioComponent,
    NavComponent,
    ProjectsComponent,
    SocialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
