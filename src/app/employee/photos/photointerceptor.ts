import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import{IPhoto} from '../photo';
import { HttpClient } from '@angular/common/http/src/client';


export class PhotoInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<IPhoto>, next: HttpHandler){
        const newRequest = req.clone({
            headers: req.headers.set('Authorization','admin')
        });
        console.log(newRequest);
       return next
       .handle(newRequest)
       .do(
          succ=>console.log(succ),
          err=>{
              if(err.status===401){
                  console.error('you are not Authenticated');
              }
          } 
       )
    }
 }