/* Set rates + misc */
var taxRate = 0.05;
var shippingRate = 15.00;

// -----------------for-Shopping-cart-------------
$(document).ready(function () {
  update_amounts();
  $('.qty, .price').on('keyup keypress blur change', function (e) {
    update_amounts();
  });
});

function update_amounts() {
  var sum = 0.0;
  $('#myTable > tbody  > tr').each(function () {
    var qty = $(this).find('.qty').val();
    var price = $(this).find('.price').val();
    var amount = (qty * price)
    sum += amount;
    $(this).find('.amount').text('' + amount);
  });
  $('.total').text(sum);
  grandTotal(sum);
}

function grandTotal(subtotal) {
  /* Calculate totals */
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var g_total = subtotal + tax + shipping;

  // console.log(g_total);
  $('.tax').text('' + tax);
  $('.shipping').text('' + shipping);
  $('.g_total').text('' + g_total);
}












