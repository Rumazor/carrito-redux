import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>¿Quieres remover todos objetos de tu carrito?</h4>
        <div className="btn-container">
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
            }}
            type="button"
            className="btn confirm-btn"
          >
            Confirmar
          </button>
          <button
            onClick={() => {
              dispatch(closeModal());
            }}
            type="button"
            className="btn clear-btn"
          >
            Cancelar
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
