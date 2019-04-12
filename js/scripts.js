function Bowl(size, beans, toppings, price) {
  this.size = size,
  this.beans = beans,
  this.toppings = [],
  this.price = priceCalculation(price);
}

function priceCalculation(price) {
  return '$' + price.toFixed(2);
}

Bowl.prototype.showPrice = function() {
  $('#bowl-result').empty();


  $('#bowl-result').append('<p>Bowl size: ' + this.size + '</p>');
  $('#bowl-result').append('<p>Beans: ' + this.beans + '</p>');
  $('#bowl-result').append('<p>Toppings: ' + asldkfj + '</p>');
  $('#bowl-result').append('<p>Bowl Price: ' + this.price + '</p>');
}
