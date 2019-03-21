import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CatInformationComponent } from './cat-information/cat-information.component';

const appRoutes: Routes = [
  {
    path: 'cat-information',
    component: CatInformationComponent,
    data: { title: 'Cat Information' }
  },
  { path: '',
    redirectTo: '/cat-information',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CatInformationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
