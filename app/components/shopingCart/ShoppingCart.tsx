import { useShoppingCart } from "@/app/context/shopincartConext";
import { Offcanvas, Stack } from "react-bootstrap";
// import { useShoppingCart } from "../context/ShoppingCartContext"
// import { formatCurrency } from "../utilities/formatCurrency"
// import { CartItem } from "./CartItem"
// import storeItems from "../data/items.json"

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body></Offcanvas.Body>
    </Offcanvas>
  );
}
