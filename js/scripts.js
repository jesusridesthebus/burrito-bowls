function Bowl(size, beans, meat, toppingsList, price) {
  this.size = size,
  this.beans = beans,
  this.meat = meat,
  this.toppings = toppingsList,
  this.price = priceCalculation(price);
}

function priceCalculation(price) {
  return '$' + price.toFixed(2);
}

Bowl.prototype.showPrice = function() {
  $('#bowl-result').empty();
  $('#bowl-result').append('<p>Bowl size: ' + this.size + '</p>');
  $('#bowl-result').append('<p>Beans: ' + this.beans + '</p>');
  $('#bowl-result').append('<p>Meat: ' + this.meat + '</p>');
  $('#bowl-result').append('<p>Toppings: ' + this.toppings + '</p>');
  $('#bowl-result').append('<p>Bowl Price: ' + this.price + '</p>');
}

var toppings;
var toppingsList;

$(function() {
  $('form#burrito-form').submit(function(event) {
    event.preventDefault();
    var bowlSize = $('#size option:selected').text();
    var beans = $('#beans option:selected').text();
    var meat = $('#meat option:selected').text();
    var toppings = [];
    $('#toppings-section input:checkbox[name=toppings]:checked').each(function() {
      toppings.push($(this).val());
    });
    for(var i = 0; i < toppings.length; i++) {
      toppings[i] = toppings[i].charAt(0).toUpperCase() + toppings[i].slice(1);
    }
    var toppingsList = toppings.join(', ');
    
    var bowlPrice = parseInt($('#size').val())+parseInt($('#meat').val());

    var burritoBowl = new Bowl(bowlSize, beans, meat, toppingsList, bowlPrice);
    burritoBowl.showPrice();
  });
});
