export function addToCart(productId) {
  return {
    type: 'ADD_TO_CART',
    id: productId
  }
}

export function removeFromCart(productId) {
  return {
    type: 'REMOVE_FROM_CART',
    id: productId
  }
}
