import React, {Component} from 'react';
import ProductList from './containers/ProductList';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getTotal } from './reducers/cart';

class App extends Component {
  render() {
    const {cart_count, total} = this.props
    return (
      <div className="container">
        <div className="row" style={{marginTop: '25px'}}>
          <div className="col-md-8 text-center" style={{fontSize: '20px'}}>
            Shopping Cart
          </div>
          <div className="col-md-4" style={{fontSize: '20px'}}>
            &nbsp; <Link to="/cart" >Cart</Link> <span style={{color: 'red'}}>  {cart_count}</span> items
            &nbsp; Total amount <span style={{color: 'red'}}>  {total}</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProductList />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    cart_count: state.cart.length,
    total: getTotal(state)
  }
}

export default connect(mapStateToProps)(App);
