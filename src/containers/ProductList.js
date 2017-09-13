import { connect } from 'react-redux';
import ProductList from '../components/ProductList';

const mapStateToProps = (state, props) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps)(ProductList);
