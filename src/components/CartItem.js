import React, {Component} from 'react';

class CartItem extends Component {
  render() {
    const { name, price, currency, removeFromCart, id } = this.props
    return (
      <div style={{marginBottom: '10px'}}>
        <span style={{display: 'inline-block'}}>{name}</span>
        <span onClick={() => removeFromCart(id)} style={{float: 'right', fontSize: '16px', color: 'red', marginLeft: '10px', marginRight: '10px', cursor: 'pointer'}}>
          remove
        </span>
        <span style={{float: 'right'}}>{price} {currency}</span>
      </div>
    );
  }
}

export default CartItem;
