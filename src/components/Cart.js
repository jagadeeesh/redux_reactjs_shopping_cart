import React, {Component} from 'react';
import { Link } from 'react-router';
import CartItem from './CartItem';

class Cart extends Component {
  render() {
    const { items, total, removeFromCart } = this.props
    return (
      <div>
        <h3 className="text-center"><Link to="/">Shopping Cart</Link></h3>
        <div style={{marginTop: '50px'}}>
          <div className="panel panel-default" style={{width: '70%', marginLeft: '15%'}}>
            <div className="panel-body">
              {items.length > 0 && (
                <ul>
                  {items.map(item => (
                    <li key={item.id}>
                      <CartItem {...item} removeFromCart={removeFromCart}/>
                    </li>
                  ))}
                </ul>
              )}
              {items.length === 0 && (
                <div className="alert alert-info">Cart is empty</div>
              )}
              <div style={{fontWeight: 'bold', textAlign: 'right', fontSize: '20px', lineHeight: '1.1em', marginTop: '20px'}}>
                Total: {total} INR
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
