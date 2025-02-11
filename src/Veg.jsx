import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "./store"; 

function Veg() {
  const dispatch = useDispatch();
  const vegitems = useSelector(state => state.products.veg); 

  let finalitems=vegitems.map((item,index)=>(
    
    <li key={index} className="product-card">    
        {item.name}-₹{item.price}<br></br>
        <img src={item.image} alt={item.name}className="product-image"/> 
        <button onClick={() => dispatch(AddToCart(item))}>AddToCart</button>
        </li>
))
return(
    <>
    <div>
            <h2>Veg Items</h2>
            <div className="product-container">
                 <ol>{finalitems}</ol>
            </div>
        </div>
   
    </>
)
}

export default Veg;
