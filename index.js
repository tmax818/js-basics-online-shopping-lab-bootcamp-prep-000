var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  const itemName = item;
  const itemPrice = Math.floor(Math.random()*100);
 var itemObj = { [itemName]: itemPrice };
 cart.push(itemObj);
 console.log(`${itemName} has been added to your cart.`);
 return cart;
}

function viewCart() {
  var keys = Object.keys(cart);
  var keysArray = [];
  if(cart.length > 0) {
    for(var i = 0; i < cart.length; i++){
      keysArray.push(`${keys[i]} at $${cart.keys}`);
    }
    console.log(`In you cart, you have ${keysArray.join(' ')}`);
  } else {
    console.log( "Your shopping cart is empty.");
  }
}


function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
