import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { HeaderComponent } from './components/partials/header/header.component';
import { FooterComponent } from './components/partials/footer/footer.component';
import { BannerComponent } from './components/partials/banner/banner.component';
import { NotFoundComponent } from './components/partials/not-found/not-found.component';
import { LoaderComponent } from './components/partials/loader/loader.component';
import { SearchComponent } from './components/partials/search/search.component';
import { ListComponent } from './components/partials/list/list.component';
import { ListGroupComponent } from './components/partials/list-group/list-group.component';
import { ComicsComponent } from './components/comics/comics.component';
import { EventsComponent } from './components/events/events.component';
import { SeriesComponent } from './components/series/series.component';
import { StoriesComponent } from './components/stories/stories.component';
import { LoginComponent } from './components/partials/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    NotFoundComponent,
    LoaderComponent,
    SearchComponent,
    ListComponent,
    ListGroupComponent,
    ComicsComponent,
    EventsComponent,
    SeriesComponent,
    StoriesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
