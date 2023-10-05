import { d, up, down, left, right } from "../../models/global.js";
import { item } from "../../models/selectors.js";
import { changeItem } from "../behaviors.js";

export const keyEvents = () =>{
d.addEventListener('keypress', (e) => {
    e.key == up || e.key == left ? changeItem(item, 'prev') :
    e.key == down || e.key == right ? changeItem(item, 'next') : 
    console.log(e.key)
} ) }