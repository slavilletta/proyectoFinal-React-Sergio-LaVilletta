import { useContext } from "react";
import { miContexto } from "./CartProvider";

function CartWidget() {
  const valorDelContexto = useContext(miContexto);

  return (
    <div className="flex flex-row items-center justify-around gap-4 mx-10 ">
      <img
        src="/imagenCarrito.png"
        alt="Imagen de un carrito"
        className="w-10"
      />
      <p>{valorDelContexto.cant}</p>
    </div>
  );
}

export default CartWidget;
