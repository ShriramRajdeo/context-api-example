import { createContext, useState } from "react";

export const CartContext = createContext()

const Context = ({children})=>{
    const [cart,updateCart] = useState([]);
    
    return(
        <CartContext.Provider value={[cart,updateCart]}>
            {children}
        </CartContext.Provider>
    );
}

export default Context;