import CartItem from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";

import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Tu carrito</h2>
          <h3 className="empty-cart">esta vacio ahora mismo</h3>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Tu carrito</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button onClick={() => dispatch(openModal())} className="btn clear-btn">
          Vaciar carrito
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
