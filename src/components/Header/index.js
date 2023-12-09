import { AiOutlineShoppingCart } from "react-icons/ai";

import "./index.css";
import CartContext from "../../context/CartContext";

const Header = () => (
  <CartContext.Consumer>
    {(value) => {
      const { cartItems } = value;
      return (
        <header>
          <div className="nav-container">
            <nav className="nav-bar">
              <h1 className="restaurant-name">UNI Resto Cafe</h1>
              <div className="my-order-container">
                <p>My Orders</p>
                <AiOutlineShoppingCart className="cart-icon" />
                <p className="cart-number">{cartItems}</p>
              </div>
            </nav>
          </div>
        </header>
      );
    }}
  </CartContext.Consumer>
);

export default Header;

// import { AiOutlineShoppingCart } from "react-icons/ai";

// import "./index.css";
// import CartContext from "../../context/CartContext";

// const Header = () => {
//   return (
//     <CartContext.Consumer>
//       {(value) => {
//         const { cart_items } = value;
//         return (
//           <header>
//             <div className="nav-container">
//               <nav className="nav-bar">
//                 <h1 className="restaurant-name">UNI Resto Cafe</h1>
//                 <div className="my-order-container">
//                   <p>My orders</p>
//                   <AiOutlineShoppingCart className="cart-icon" />
//                   <span className="cart-number">{cart_items}</span>
//                 </div>
//               </nav>
//             </div>
//           </header>
//         );
//       }}
//     </CartContext.Consumer>
//   );
// };

// export default Header;
