import {
    onDragOver,
    onDragLeave,
    onDrop,
} from "./events/dragndrop.js";
import { clickDrop } from "./events/click.js";
// Asignacion de Eventos de Casillas 
export const eventListeners = (tags) => {
tags.map((t) => {
    t.ondragover = (e) => onDragOver(e)
    t.ondragleave = (e) => onDragLeave(e)
    t.ondrop = (e) => onDrop(e)
    t.onclick = (e) => clickDrop(e)
} ) }