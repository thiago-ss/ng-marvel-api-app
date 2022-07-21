import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { ComicsComponent } from './components/comics/comics.component';
import { EventsComponent } from './components/events/events.component';
import { LoginComponent } from './components/partials/login/login.component';
import { SeriesComponent } from './components/series/series.component';
import { StoriesComponent } from './components/stories/stories.component';

const routes: Routes = [
  { path: 'characters', component: CharactersComponent },
  { path: 'comics', component: ComicsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'stories', component: StoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

// Client ID
// 79389377198-a94b4roadn2pdkba9hnictrpvgh5f149.apps.googleusercontent.com

// Client Secret
// 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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
