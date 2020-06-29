import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartCount } from '../../redux/cart/cart.selector';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
  <span className='item-count'>{itemsCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);