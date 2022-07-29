import { useContext } from "react";
import { CartContext } from "../Context";

const SingleProduct = ({product})=>{

    const [cart,updateCart] = useContext(CartContext);

    return(
        <div className="product-card">
            <img src={product.image} alt="product-img"/>
            <div  className="product-description">
                <div className="name">{product.name}</div>
                <div className="price">${product.price}</div>
            </div>
            <div>
                {
                    (cart.includes(product))
                        ?   (<button onClick={()=>{ updateCart(cart.filter((i)=>product.id!==i.id))}}>
                                Remove from cart
                            </button>)
                        
                        :   (<button onClick={()=>{updateCart([...cart,product])}}>Add to cart</button>)
                }
            </div>
        </div>
    );
}

export default SingleProduct;