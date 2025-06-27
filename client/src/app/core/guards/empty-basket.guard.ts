import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AccountService } from '../services/account.service';
import { map, of } from 'rxjs';
import { CartService } from '../services/cart.service';
import { SnackbarService } from '../services/snackbar.service';

export const emptyBasketAuth: CanActivateFn = (route, state) => {
  const cartService = inject(CartService);
  const router = inject(Router);
  const snack = inject(SnackbarService);

  if(!cartService.cart() || cartService.cart()?.items.length === 0) {
    snack.error("Your cart is empty");
    router.navigateByUrl('/cart');
    return false;
  }

  return true;
};
