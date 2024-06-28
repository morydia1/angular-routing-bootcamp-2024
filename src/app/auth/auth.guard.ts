import { ActivatedRouteSnapshot, CanActivateFn, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { AuthService } from './auth-service';
import { Observable, skipWhile, take, tap } from 'rxjs';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.signedIn$.pipe(
    skipWhile(value => value === null),
    take(1),
    tap((authenticated) => {
      if(!authenticated){
        return router.navigateByUrl('/')
      }
    })
  );
};



