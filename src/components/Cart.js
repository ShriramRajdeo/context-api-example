import { useContext } from "react";
import { CartContext } from "../Context";
import SingleProduct from "./SingleProduct";


const Cart = ()=>{
    const [cart] = useContext(CartContext);

    return(
        <div className="product-container">
            {
                cart.map((product)=>{
                    return <SingleProduct product={product} key={product.id}/>
                })
            }
        </div>
    );
}

export default Cart;