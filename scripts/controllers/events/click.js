import { d, store } from "../../models/global.js";
// Funciones Click para mover
export const 
clickDrag = (e) => {
    e.stopPropagation()
    store.setItem("piece", e.target.id)
},
clickDrop = (e) => { 
if (store.getItem("piece")) {
    const item = d.getElementById(store.getItem("piece"))
    e.target.append(item)
    store.removeItem("piece")
} }