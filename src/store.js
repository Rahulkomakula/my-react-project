import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        veg: [
            { name: "Panner Butter Masala", price: 269.00,image: "/Pannerbuttermasala.png" },
            { name: "Kaju Panner", price: 265.00,image:"/kajupaneer.jpg" },
            { name: "Kaju Biryani", price: 299.00,image:"/kajubiryani.jpg" },
            { name: "Dal Fry", price: 189.00 ,image:"/dal.jpg"},
            { name: "Panner Tikka Masala", price: 255.00,image:"/pannertikka.jpg" },
            { name: "Palak Panner", price: 258.00 ,image:"/Palakpaneer.webp"},
            { name: "Mushroom Biryani", price: 344.00 ,image:"/Mushroombiryani.jpg"},
            { name: "Curd Rice", price: 189.00,image:"/curdrice.jpg" },
            { name: "Veg Manchurian", price: 248.00 ,image:"/vegmanchurian.jpg"},
            { name: "Butter Naan", price: 35.00 ,image:"/naan.jpg"},
            { name: "Tandoori Roti ", price: 25.00 ,image:"/roti.jpg"}
        ],
        nonvegitems: [
            { name: "Chicken Biryani Full", price: 250.00,image:"/cbfull.jpg" },
            { name: "Chicken Biryani Single", price: 150.00 ,image:"/cbsingle.jpg"},
            { name: "Mutton Biryani Full", price: 280.00 ,image:"/mb.jpg"},
            { name: "Chicken-65", price: 250.00 ,image:"/c65.jpg"},
            { name: "Grilled Chicken", price: 230.00 ,image:"/grill.jpg"},
            { name: "Chicken Lollipop", price: 260.00 ,image:"/lolipop.jpg"},
            { name: "Butter Chicken", price: 230.00,image:"/butterck.jpg" },
            { name: "Apollo Fish", price: 335.00 ,image:"/apolofish.jpg" },
            { name: "Prawns Biryani", price:360.00 ,image:"/prawns.jpg" },
            { name: "Fish TIkka ", price: 360.00,image:"/fishtikka.webp" },
            { name: "Mutton Kheema Biryani ", price: 370.00 ,image:"/muttonkheema.jpg"},

        ],
        milkitems: [
            { name: "Gulab Jamun( 4 )", price: 80 ,image:"/Gulab Jamun.jpg"},
            { name: "Kheer", price: 150,image:"/Kheer.jpg"},
            { name: "Rasmalai", price: 80,image:"/Rasmalai.jpg"},
            { name: "Chocolate Brownie", price: 80 ,image:"/ChocolateBrownie.jpg"},
            { name: "Cheesecake", price: 220,image:"/Cheesecake.jpg" },
            { name: "Apple Pie", price: 150 ,image:"/ApplePie.jpg"},
            { name: "Donuts", price: 110 ,image:"/Donuts.jpg"},
            { name: "Macarons", price: 120,image:"/Macarons.jpg"},
            { name: "Red Velvet Cake", price: 350,image:"/RedVelvetCake.jpg" },
            { name: "Ice Cream Sundae", price: 250 ,image:"/IceCreamSundae.jpg"},
            { name: "Mochi", price: 240 ,image:"/Mochi.jpg"},
            { name: "Chocolate Fudge ", price: 250 ,image:"/ChocolateFudge.jpg"},
            { name: "Peanut Butter Cup", price: 140,image:"/PeanutButterCup.jpg"}
        ]
    },
    reducers: {}
});
const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        AddToCart: (state, action) => {
            let item = state.find(item => item.name === action.payload.name);
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        increment:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item)
            {
                item.quantity+=1;
            }

        },
        decrement:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name);
            if(item.quantity>1){
                item.quantity-=1;
            }
            else{
                return state.filter(item=>item.name!==action.payload.name);
            }
    },
    remove:(state,action)=>{
        return state.filter(item=>item.name!==action.payload.name);
    },
    clearCart:()=>[]
    }
});
const purchasedetailslice=createSlice({
    name:'purchasedetails',
    initialState:[],
    reducers:{
     addpurchase:(state,action)=>{
       state.push(action.payload)
     },
   
    }
});
const authSlice=createSlice({
    name:"auth",
    initialState:{
        isauthenticated:localStorage.getItem("username")?true:false,
        user:localStorage.getItem("username")||"",
    },
    reducers:{
        login:(state,action)=>{
            state.isauthenticated=true;
            state.user=action.payload;
            localStorage.setItem("username",action.payload);
        },
        logout:(state)=>{
            state.isauthenticated=false;
            state.user="";
            localStorage.removeItem("username");
        },
    }
})
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        purchasedetails: purchasedetailslice.reducer,
        auth:authSlice.reducer

    }
});
export const { AddToCart,increment,decrement,remove,clearCart} = cartSlice.actions;
export const{addpurchase}=purchasedetailslice.actions;
export const{login,logout}=authSlice.actions;
export default store;
