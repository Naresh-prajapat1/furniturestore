import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
// import { SnackBarContext } from "./snackbar";
const CartContext = createContext(null);

const CartProvider = ({ children }) => {
  // const { handleSnackOpen, snackMessage, snackBarOpen } =
  //   useContext(SnackBarContext);
  const [openSiderBar, setOpenSiderBar] = useState(false);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, quantity = 1) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
    setOpenSiderBar(false);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };
  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (itemId, newQuantity) => {
    setCart(
      cart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  const handleSiderBarOpen = () => {
    setOpenSiderBar(true);
  };
  const handleSiderBarClose = () => {
    setOpenSiderBar(false);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateQuantity,
        openSiderBar,
        handleSiderBarClose,
        handleSiderBarOpen,
      }}>
      {children}
    </CartContext.Provider>
  );
};
export { CartContext, CartProvider };
