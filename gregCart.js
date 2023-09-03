const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cart = {
  cartArray: [],
  addToCart(input) {
    cart.cartArray.push(input);
    rl.question("what do you want to do: ", cart.standBy);
  },
  removeFromCart(input) {
    cart.cartArray.splice(cart.cartArray.indexOf(input), 1);
    rl.question("what do you want to do: ", cart.standBy);
  },
  standBy(input) {
    if (input === "add") {
      rl.question("what do you want to add: ", cart.addToCart);
    }

    if (input === "remove") {
      rl.question("what do you want to remove: ", cart.removeFromCart);
    }

    if (input === "showcase") {
      console.log(cart.cartArray.join(", "));
      rl.question("what do you want to do: ", cart.standBy);
    }

    if (input === "length") {
      console.log(cart.cartArray.length);
      rl.question("what do you want to do: ", cart.standBy);
    }

    if (input === "exit") {
      rl.close();
    } else {
      rl.question(
        "please input add, remove, showcase or length: ",
        cart.standBy
      );
    }
  },
};

rl.question("what do you want to do? ", cart.standBy);
