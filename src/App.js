import { Component } from "react";

import FoodList from "./components/FoodList";

import CartContext from "./context/CartContext";

class App extends Component {
  state = { cartItems: 0 };

  IncreaseCartItems = () => {
    this.setState((prevState) => ({
      cartItems: prevState.cartItems + 1,
    }));
  };

  DecreaseCartItems = () => {
    const { cartItems } = this.state;
    this.setState((prevState) => {
      if (cartItems !== 0) {
        return { cartItems: prevState.cartItems - 1 };
      }
    });
  };
  render() {
    const { cartItems } = this.state;
    return (
      <CartContext.Provider
        value={{
          cartItems,
          IncreaseCartItems: this.IncreaseCartItems,
          DecreaseCartItems: this.DecreaseCartItems,
        }}
      >
        <>
          <FoodList />
        </>
      </CartContext.Provider>
    );
  }
}

export default App;

// import { Component } from "react";

// import Header from "./components/Header";

// import FoodList from "./components/FoodList";

// import CartContext from "./context/CartContext.js";

// class App extends Component {
//   state = { cart_items: 0 };
//   Increase_cart_items = () => {
//     this.setState((prevState) => ({
//       cart_items: prevState.cart_items + 1,
//     }));
//   };
//   Decrease_cart_items = () => {
//     const { cart_items } = this.state;
//     this.setState((prevState) => {
//       if (cart_items !== 0) {
//         return { cart_items: prevState.cart_items - 1 };
//       }
//     });
//   };
//   render() {
//     const { cart_items } = this.state;
//     return (
//       <CartContext.Provider
//         value={{
//           cart_items,
//           Increase_cart_items: this.Increase_cart_items,
//           Decrease_cart_items: this.Decrease_cart_items,
//         }}
//       >
//         <>
//           <Header />
//           <FoodList />
//         </>
//       </CartContext.Provider>
//     );
//   }
// }

// export default App;
