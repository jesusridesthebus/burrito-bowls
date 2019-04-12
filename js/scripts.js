function Bowl(size, beans, toppings, price) {
  this.size = size,
  this.beans = beans,
  this.toppings = toppings,
  this.price = function priceCalculation(price) {
    return '$' + price.toFixed(2);
  }
}

// function priceCalculation(price) {
//   return '$' + price.toFixed(2);
// }

Bowl.prototype.showPrice = function() {
  $('#bowl-result').empty();
  
}