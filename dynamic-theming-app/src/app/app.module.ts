import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from '../components/header/header.component';
import { AppFooterComponent } from '../components/footer/footer.component';
import { AppHomeComponent } from '../components/home/home.component';
import { CSSThemingService } from '../services/css-theming.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppHomeComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CSSThemingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
