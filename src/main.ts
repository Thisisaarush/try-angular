// JIT (just in time) and AOT (ahead of time) compilation
// We should always use AOT compilation.

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment.development';
import { enableProdMode } from '@angular/core';

// Enabling Production Mode to optimize/boost performance our app in prod
if (environment.production) {
  enableProdMode();
}

// platformBrowserDynamic uses JIT Compilation but Angular CLI is smart and will override this to use AOT Compilation.
// However we write platformBrowserDynamic instead of platformBrowser(which uses AOT) because angular team recommends this in case anyone wanna opt-out of AOT compilation.
platformBrowserDynamic()
  .bootstrapModule(AppModule) // Initiate our app in browser and returns a promise
  .catch((err) => console.error(err));
