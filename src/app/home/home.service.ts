import {Injectable, Optional, Inject} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  appBaseHref: string;


  constructor(
    @Optional() @Inject(APP_BASE_HREF) origin: string
  ) {
    this.appBaseHref = origin;
  }

  getWelcome() {
    return 'Welcome to SSR';
  }

  getAppBaseHref() {
    return this.appBaseHref;
  }
}
