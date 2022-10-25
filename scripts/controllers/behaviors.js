import {
    className
} from "../models/declarations.js";
// Funcion Alternar Clases
export const toggle = (config) => {
    if (config.target.classList.toggle(config.status)){
        config.tag.classList.replace(config.list[0], config.list[1])
    } else {
        config.tag.classList.replace(config.list[1], config.list[0])
} },
getItem = (array) => {
    for (let i of array){
        if(i.classList.contains(className)){
            i.classList.remove(className);
            return i;
} } },
changeItem = (array,type) => {
    let item = getItem(array);
    if (type == 'next') {
        item = item.nextElementSibling || item.parentNode.firstElementChild
    } 
    else if (type == 'prev'){
        item = item.previousElementSibling || item.parentNode.lastElementChild
    } 
    else {
        item = array[type]
}   
item.classList.add(className)
},
selectItem = () => {
    let list = menu.querySelectorAll('.menu li');
    list.forEach( (li,i) => li.addEventListener('click', () => {
        changeItem(list, i);
    } ) )
}