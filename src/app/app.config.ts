import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"angularpanellum-180e4","appId":"1:297567231400:web:6e27dd289c48747e5d919d","storageBucket":"angularpanellum-180e4.firebasestorage.app","apiKey":"AIzaSyA4sU-ODu1e6Dhe4nnviqw1O_UNISKPt1k","authDomain":"angularpanellum-180e4.firebaseapp.com","messagingSenderId":"297567231400"})), provideAuth(() => getAuth()), provideAnimationsAsync()]
};
