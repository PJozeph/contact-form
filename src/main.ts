import { provideHttpClient } from '@angular/common/http';
import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideState, provideStore } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import * as emailEffect from './app/contact-form/store/effects';
import { contactFormFeatureKey, contactFormReducer } from './app/contact-form/store/reducers';
import {provideStoreDevtools} from '@ngrx/store-devtools'


bootstrapApplication(AppComponent, {
    providers: [
        provideRouter(appRoutes),
        provideStore(),
        provideHttpClient(),
        provideState(contactFormFeatureKey, contactFormReducer),
        provideEffects(emailEffect),
        provideStoreDevtools({
            maxAge: 25,
            logOnly: !isDevMode(),
            autoPause: true,
            trace: false,
            traceLimit: 75,
          })
    ],
});
