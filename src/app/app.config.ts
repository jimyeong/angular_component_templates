import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routeConfig } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routeConfig), provideClientHydration(),CommonModule, provideAnimations()]
};
