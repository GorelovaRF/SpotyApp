import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { finalize, Observable } from "rxjs";
import { SpotifyService } from "src/app/service/spotify.service";


@Injectable()
 export class SpinnerInterceptor implements HttpInterceptor{
constructor(protected service: SpotifyService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       this.service.show();
       return next.handle(req).pipe(
           finalize(() => this.service.hide()));
    }
}