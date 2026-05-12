import { createSlice } from "@reduxjs/toolkit"

type CartItem = {
  productId: string
  name: string
  price: number
  image: string
  quantity: number
  stock: number
}

type CartState = {
  items: CartItem[]
}

const initialState: CartState = {
    items: JSON.parse(localStorage.getItem("cart") || "[]"),
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state, action) {
            const item = action.payload as CartItem
            const existingItem = state.items.find(i => i.productId === item.productId)
            if(existingItem){
                existingItem.quantity += action.payload.quantity
                if(existingItem.quantity > existingItem.stock){
                    existingItem.quantity = existingItem.stock
                }
            }else {
                state.items.push(item)
                 localStorage.setItem("cart", JSON.stringify(state.items))
            }
        },
        removeFromCart(state, action){
            state.items = state.items.filter((item) => item.productId !== action.payload.productId)
            localStorage.setItem("cart", JSON.stringify(state.items))
        },
        clearCart(state){
            state.items = []
            localStorage.removeItem("cart")
        },
        increaseQuantity(state, action){
            const item = state.items.find((item) => item.productId === action.payload.productId);
            if(item && item.quantity < item.stock){
                item.quantity += 1;
                localStorage.setItem("cart", JSON.stringify(state.items));
            }
        },
        decreaseQuantity(state, action){
            const item = state.items.find((item) => item.productId === action.payload.productId);
            if(item && item.quantity > 1){
                item.quantity -= 1;
                localStorage.setItem("cart", JSON.stringify(state.items));
            }
        } 
    }
})

export const {addToCart, removeFromCart, clearCart, increaseQuantity, decreaseQuantity} = cartSlice.actions

export default cartSlice.reducer