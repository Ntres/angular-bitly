import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ShortInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const TOKEN = '9c7fdcf01097da454b078f1330c557b26cfc7031';

    request = request.clone({
      setHeaders: { Authorization: 'Bearer ' + TOKEN },
    });
    return next.handle(request);
  }
}
