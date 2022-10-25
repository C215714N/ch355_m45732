import {
    btn,
    box,
    control,
    menu,
    start
} from "../models/declarations.js";
import { 
    toggle, 
    changeItem 
} from "./behaviors.js";
import { setOrder } from "../models/orderpieces.js";

export const EventListeners = () => {
    btn.addEventListener( 'click', (e) => { 
        toggle( {
            tag: e.target,
            target: menu,
            status: 'active',
            list: ['open-menu','close-menu']
        } ) } )
    control.forEach( btn => btn.addEventListener( 'click', (e) => {
        e.stopPropagation();
        let i = e.target.className.split('-')[1];
        let item = menu.querySelectorAll('li')
        changeItem(item, i);
    } ) )
    start.addEventListener( 'click', (e) => { 
        toggle( {
            tag: e.target,
            target: box,
            status: 'empty',
            list: ['start-game', 'end-game']
        } )
        setOrder();
    } )
}