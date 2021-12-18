import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  LoginURL = 'https://localhost:44353/api/Authentication/login';
  SignupURL = 'https://localhost:44353/api/Authentication/register';  
  constructor(private https:HttpClient, private route: Router) {

   }

   public loginservice(data:any):Observable<any>{
    return this.https.post(this.LoginURL,data).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error: Response) => throwError(error))
    );
  }

  public Signupservice(data:any):Observable<any>{
    return this.https.post(this.SignupURL,data).pipe(
      map((res: any) => {
        return res;
      }),
      catchError((error: Response) => throwError(error))
    );
  }

}
