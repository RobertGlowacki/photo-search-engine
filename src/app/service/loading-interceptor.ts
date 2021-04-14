import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { SpinnerService } from './spinner.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';

/**
 * Interceptor that adds promise object to the SpinnerWrappingService when ajax request is started.
 */
@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  /**
   * @param spinnerService service controlling the display of the spinner.
   */
  constructor(private spinnerService: SpinnerService) {
  }

  /**
   * Adds a promise object created from httpEvent observable to the SpinnerWrappingService.
   * Intercepts the requests and returns the observable with httpEvent without changing anything.
   *
   * @param req http request
   * @param next http handler transforming http request into a stream of events
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let promiseBridge;
    this.spinnerService.addPromise(new Promise<any>((resolve, reject) => {
      promiseBridge = {resolve, reject};
    }));
    return next.handle(req).pipe(finalize(() => promiseBridge.resolve()));
  }

}
