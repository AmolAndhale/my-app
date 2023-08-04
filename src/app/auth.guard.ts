import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  console.log(state);
  console.log('Im in auth guard');
  console.log('token', token);
  if(token){
    return true;
  }else{
    router.navigate(['/loginpage']);
    return false;

  }
  
};
