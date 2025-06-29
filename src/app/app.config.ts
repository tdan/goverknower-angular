import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideHttpClient(), provideFirebaseApp(() => initializeApp({ projectId: "goverknower-f3676", appId: "1:840506630556:web:3c60292d660ec40b0d6859", storageBucket: "goverknower-f3676.firebasestorage.app", apiKey: "AIzaSyAxhbQU7ODPGcJAGUE82qzyEQbyORnrXIg", authDomain: "goverknower-f3676.firebaseapp.com", messagingSenderId: "840506630556", measurementId: "G-ZD335GYG8E" })), provideAnalytics(() => getAnalytics()), ScreenTrackingService,
    ],
};
