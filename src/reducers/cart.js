export default function cart(state = [], action = {}) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [
        ...state,
        action.id
      ];
    case 'REMOVE_FROM_CART':
      return state.filter(id => id !== action.id);
    default:
      return state;
  }
}

// selectors

function getProduct(state, id) {
  return state.products.find(item => item.id === id);
}

export function getItems(state) {
  return state.cart.map(id => getProduct(state, id));
}

export function getTotal(state) {
  let total = 0
  getItems(state).map(item => total+= item.price)
  return total
}
