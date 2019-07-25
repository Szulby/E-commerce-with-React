export const addUser = user => ({
  type: 'ADD_USER',
  user: user,
})
export const addCart = cart => ({ type: 'ADD_PRODUCT', cart })
export const removeProduct = cart => ({ type: 'REMOVE_PRODUCT', cart })
export const buyProduct = () => ({ type: 'BUY_PRODUCT' })
