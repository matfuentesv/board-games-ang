import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {HttpClientModule} from "@angular/common/http";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatDialogModule} from "@angular/material/dialog";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    importProvidersFrom(
      HttpClientModule,MatDialogModule), provideAnimationsAsync()]
};
