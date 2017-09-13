import { connect } from 'react-redux';
import Product from '../components/Product';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/actionCreators';
//import {addToCart, removeFromCart} from '../actions/actionCreators';

const mapStateToProps = (state, props) => {
  return {
    isInCart: state.cart.indexOf(props.id) !== -1
  }
}

const mapDispatchToProps = (dispatch) => (
  // {
  //   addToCart: (id) => dispatch(addToCart(id)),
  //   removeFromCart: (id) => dispatch(removeFromCart(id))
  // }
  bindActionCreators(actionCreators, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(Product);
