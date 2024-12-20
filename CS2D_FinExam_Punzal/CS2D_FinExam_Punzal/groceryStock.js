class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.length ? this.items.pop() : null;
  }

  peek() {
    return this.items.length ? this.items[this.items.length - 1] : null;
  }

  isEmpty() {
    return !this.items.length;
  }

  size() {
    return this.items.length;
  }

  listItems() {
    console.log(this.items.join(', '));
  }
}

// Creating a grocery cart stack and adding items
const groceryCart = new Stack();
groceryCart.push("Kiwi");
groceryCart.push("Orange");
groceryCart.push("Cabbage");
groceryCart.push("Cake");

// Listing all items in the cart
groceryCart.listItems();  // Output: Apple, Banana, Carrot, Doughnuts

// Peek and pop the top item
console.log("Top item:", groceryCart.peek());  // Output: Doughnuts
console.log("Removed item:", groceryCart.pop());  // Output: Doughnuts

// List items after removal and other operations
groceryCart.listItems();  // Output: Apple, Banana, Carrot
console.log("Cart size:", groceryCart.size());  // Output: 3
console.log("Is cart empty?", groceryCart.isEmpty());  // Output: false
