import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Router} from '@angular/router';
import {ErrorService} from "../services/error.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(
    private readonly router: Router,
    private readonly errorService: ErrorService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 404:
            this.router.navigate(['/not-found']);
            break;
          default:
          case 500:
          case 400:
          case 403:
          case 401:
            this.errorService.setError({errorMessage: error.statusText, errorCode: error.status});
            this.router.navigate(['/server-error']);
            break;
        }

        return throwError(() => new Error(error.message));
      })
    );
  }
}
