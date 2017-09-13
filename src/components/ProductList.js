import React, { Component} from 'react';
import Product from '../containers/Product';

class ProductList extends Component {
  render() {
    const {products} = this.props;
    return (
      <div style={{marginTop: '50px'}}>
        <h4>Products</h4>
        <ul style={{padding: '0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'stretch'}}>
          {products.map(product => (
            <li key={product.id} style={{listStyle: 'none', width: '32%'}}>
              <Product {...product} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductList;
