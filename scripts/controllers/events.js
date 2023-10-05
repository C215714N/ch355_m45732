import {
    btn,
    box,
    control,
    menu,
    item,
    start
} from "../models/selectors.js";
import { 
    toggle, 
    changeItem 
} from "./behaviors.js";
import { setOrder } from "../models/orderpieces.js";

export const EventListeners = () => {
btn.onclick = (e) => toggle( {
    tag: e.target,
    target: menu,
    status: 'active',
    list: ['open-menu','close-menu']
} ) 
control.forEach( btn => btn.onclick = (e) => {
    const i = e.target.className.split('-')[1];
    changeItem(item, i);
} )
start.onclick = (e) => { 
    toggle( {
        tag: e.target,
        target: box,
        status: 'empty',
        list: ['start-game', 'end-game']
    } )
    setOrder();
} }