import React, { Component} from 'react';

class Product extends Component {
  handleClick() {
    const { id, addToCart, removeFromCart, isInCart } = this.props;
    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  }

  render() {
    const { name, price, currency, image, isInCart } = this.props;
    return (
      <div className="thumbnail" style={{margin: '10px', overflow: 'auto'}}>
        <img src={image} alt="product" style={{height: '150px'}}/>
        <div className="caption">
          <h3>
            {name}
          </h3>
          <div style={{display: 'inline-block', lineHeight: '34px'}}>{price} {currency}</div>
          <div style={{float: 'right'}}>
            <button
                className={isInCart ? 'btn btn-danger' : 'btn btn-primary'}
                onClick={this.handleClick}
            >
              {isInCart ? 'Remove' : 'Add to cart'}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
