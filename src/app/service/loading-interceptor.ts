import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { SpinnerService } from './spinner.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let promiseBridge;
    this.spinnerService.addPromise(new Promise<any>((resolve, reject) => {
      promiseBridge = {resolve, reject};
    }));
    return next.handle(req).pipe(finalize(() => promiseBridge.resolve()));
  }

}
