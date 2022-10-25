import { d } from "../models/declarations.js";
// Funciones Arrastrar y Soltar
export const onDrag = (e) => {
    e.dataTransfer.setData('piece', e.target.id)
}
export const onDragOver = (e) => {
    e.preventDefault();
    e.target.classList.add('dragover');
}
export const onDragLeave = (e) => {
    e.target.classList.remove('dragover')
}
export const onDrop = (e) => {
    let dragged = e.dataTransfer.getData('piece');
    let piece = d.getElementById(dragged);
    e.target.appendChild(piece);
    e.target.classList.remove('dragover');
}
// Funciones Click para mover
export const clickDrag = (e) => {
    let current = window.localStorage
    e.stopPropagation();
    current.setItem("current", e.target.id);
}
export const clickDrop = (e) => {
    e.stopPropagation();
    let current = window.localStorage;
    if (current.getItem("current")) {
        let item = current.getItem("current");
        item = d.getElementById(item);
        e.target.appendChild(item);
        current.removeItem("current");
    }
}