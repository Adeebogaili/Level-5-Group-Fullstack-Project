import React, {useState, createContext} from "react";

const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart:() => {},
    deleteFromCart: () => {},
    // getTotalCost: () => {}
})

function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([])

    function getProductQuantity (id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity

        if (quantity === undefined) {
            return 0
        }

        return quantity
    }

    function addOneToCart(id) {
        const quantity =  getProductQuantity(id)

        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id 
                    ? {... product, quantity: product.quantity + 1}
                    : product 
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id)

        if (quantity == 1) {
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id 
                    ? {... product, quantity: product.quantity - 1}
                    : product 
                )
            )
        }
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts => 
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id
            })
        )
    }

    // function getTotalCost () {
    //     let totalCost = 0
    // }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        // getTotalCost,
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}
