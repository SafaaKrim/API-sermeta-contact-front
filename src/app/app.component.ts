import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // MONGODB_ADDON_DB="beeiry16zortgfz"
 // MONGODB_ADDON_HOST="beeiry16zortgfz-mongodb.services.clever-cloud.com"
  //MONGODB_ADDON_PASSWORD="K4Ldqnot9Y6pAFfbUmh2"
//  MONGODB_ADDON_PORT="27017"
 // MONGODB_ADDON_URI="mongodb://uvr09ybn0bcjyvbyfxra:K4Ldqnot9Y6pAFfbUmh2@beeiry16zortgfz-mongodb.services.clever-cloud.com:27017/beeiry16zortgfz"
//  MONGODB_ADDON_USER="uvr09ybn0bcjyvbyfxra"
 // MONGODB_ADDON_VERSION="4.0.3"
  //title = 'sermeta-contact-front';
  title = 'angular7crud';
  constructor(private _loadingBar: SlimLoadingBarService, private _router: Router) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }
}

