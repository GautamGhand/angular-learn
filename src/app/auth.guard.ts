import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import {jwtDecode} from 'jwt-decode';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('authToken');

  if (token) {
    try {
      const decoded: any = jwtDecode(token);
      const isExpired = decoded.exp * 1000 < Date.now();
      if (isExpired) {
        localStorage.removeItem('authToken');
        router.navigate(['/login']);
        return false;
      }
      return true;
    } catch (error) {
      localStorage.removeItem('authToken');
      router.navigate(['/login']);
      return false;
    }
  } else {
    router.navigate(['/login']);
    return false;
  }
};
