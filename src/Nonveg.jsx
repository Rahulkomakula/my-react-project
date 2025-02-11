import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "./store";

function NonVeg(){
    const dispatch = useDispatch();
    let nonvegitems=useSelector(state=>state.products.nonvegitems)

    let finalitems=nonvegitems.map((item,index)=>(
        <li key={index} className="product-card" >     
            {item.name}-₹{item.price}&emsp;
            <img src={item.image} alt={item.name}className="product-image"/> 
            <button onClick={() => dispatch(AddToCart(item))}>AddToCart</button>
            </li>
    ))
    return(
        <>
        <h2>Nonveg-items</h2>
       <div className="product-container">
        <ol>{finalitems}</ol>
        </div>
        </>
    )
}
export default NonVeg;