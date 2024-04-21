import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/widgets/header/header.component';
import { BannerComponent } from './components/widgets/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { PhotoItemComponent } from './components/pieces/photo-item/photo-item.component';
import { HighlightNumberDirective } from './directives/highlight-number/highlight-number.directive';
import { PhotoDetailsComponent } from './components/pieces/photo-details/photo-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    PhotoItemComponent,
    HighlightNumberDirective,
    PhotoDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
