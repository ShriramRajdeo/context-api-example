import { useState } from "react";
import SingleProduct from "./SingleProduct";

const Home = ()=>{
    const productsArray= [
            {
              id:1,
              name :"Cap",
              price:5,
              image:"./images/cap.png",
            },
            {
              id:2,
              name :"HandBag",
              price:30,
              image:"./images/HandBag.png",
            },
            {
              id:3,
              name :"Shirt",
              price:35,
              image:"./images/Shirt.png",
            },
            {
              id:4,
              name :"Shoe",
              price:50,
              image:"./images/Shoe.png",
            },
            {
              id:5,
              name :"Pant",
              price:35,
              image:"./images/Pant.png",
            },
            {
              id:6,
              name :"Slipper",
              price:25,
              image:"./images/Slipper.png",
            },
          ]

    const [products] = useState(productsArray);
    
    return(
        <div className="product-container">
            {
                products.map((product)=>{
                    return <SingleProduct product={product} key={product.id}/>
                })
            }
        </div>
    );
}

export default Home;