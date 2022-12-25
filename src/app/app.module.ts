import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxBootstrapIconsModule, github, linkedin } from 'ngx-bootstrap-icons';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

const icons = {
  github,
  linkedin,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToolbarComponent,
    FooterComponent,
    NgxBootstrapIconsModule.pick(icons),
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: !isDevMode(),
      autoPause: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
