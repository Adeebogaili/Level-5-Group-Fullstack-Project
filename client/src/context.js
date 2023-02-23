import React, {useState, createContext} from "react";

const CartContext = createContext()

function CartContextProvider (props) {

    const [cart, setCart] = useState([])

    const theFunctions = {
        addToCart: function addToCart (newCartItem) {
            setCart ((prevCart) => {
                return[
                    ...prevCart,
                    newCartItem
                ]
            })
        }
    }

    return(
        // <CartContext.Provider value={{
        <CartContext.Provider value={{
                cart,
                theFunctions
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}