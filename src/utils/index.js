/**
 * This functions calculates the total price of an array of products
 * @param {Array} products cartProducts: Array of objects
 * @returns {Number} Total price
 */
export const totalPrice = (products) => {
  return products.reduce((acc, product) => acc + product.price, 0);
};
