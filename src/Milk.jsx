import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "./store";

function Milk(){
    const dispatch=useDispatch();
    let milkitems= useSelector(state=>state.products.milkitems)

    let finalitems=milkitems.map((item,index)=>(
        <li key={index}  >     
            {item.name}-₹{item.price}&emsp;
            <img src={item.image} alt={item.name} height={50} width={50} className="product-image"/> 
            <button onClick={() => dispatch(AddToCart(item))}>AddToCart</button>
            </li>
    ))
    return(
        <>
        <h2>Desserts</h2>
        <ol>{finalitems}</ol>
        </>
    )
}
export default Milk;