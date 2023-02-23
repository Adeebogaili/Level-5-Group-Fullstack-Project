import React, {useState, createContext} from "react";

const CartContext = createContext()

function CartContextProvider (props) {

    const [cart, setCart] = useState([])

    const functions = {
        addToCart: function addToCart (newCartItem) {
            setCart (newCartItem)
        }
    }

    return(
        <CartContext.Provider value={{
                cart,
                functions
            }}>
            {props.children}
        </CartContext.Provider>
    )
}

export {CartContext, CartContextProvider}