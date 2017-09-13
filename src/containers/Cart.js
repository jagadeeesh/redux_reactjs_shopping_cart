import { connect } from 'react-redux';
import Cart from '../components/Cart';
import { getItems, getTotal } from '../reducers/cart';
import {removeFromCart} from '../actions/actionCreators';

const mapStateToProps = (state, props) => {
  return {
    items: getItems(state),
    total: getTotal(state)
  }
}

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeFromCart(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
