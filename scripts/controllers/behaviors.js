import { className } from "../models/global.js";
import { item } from "../models/selectors.js";
// Funcion Alternar Clases
export const 
toggle = ({ target, tag, status, list }) => {
target.classList.toggle(status) ? 
    tag.classList.replace(list[0], list[1]) : 
    tag.classList.replace(list[1], list[0])
},
getItem = (array) => { 
for (let i of array) if(i.classList.contains(className)) {
    i.classList.remove(className)
    return i 
} },
nextItem = (item) => item.nextElementSibling || item.parentNode.firstElementChild,
prevItem = (item) => item.previousElementSibling || item.parentNode.lastElementChild,
changeItem = (array, type) => { 
    const item = type == 'next' ? nextItem(getItem(array)) : 
    type == 'prev' ? prevItem(getItem(array)) : array[type] 
    item.classList.add(className)
},
selectItem = () => item.forEach((li,i) => 
    li.onclick = () => changeItem(item, i))