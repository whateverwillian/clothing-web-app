import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
)

export const selectCartCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce((acc, self) => acc += self.quantity, 0)
)