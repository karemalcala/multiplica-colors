
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionMainComponent } from './components/section-main/section-main.component';
import { SectionHeaderComponent } from './components/section-header/section-header.component';
import { SectionFooterComponent } from './components/section-footer/section-footer.component';
import { TitleComponent } from './components/title/title.component';
import { ColorComponent } from './components/color/color.component';
import { PaginationColorsComponent } from './components/pagination-colors/pagination-colors.component';

@NgModule({
  declarations: [
    AppComponent,
    SectionMainComponent,
    SectionHeaderComponent,
    SectionFooterComponent,
    TitleComponent,
    ColorComponent,
    PaginationColorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
