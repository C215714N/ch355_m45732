import {
    onDragOver,
    onDragLeave,
    onDrop,
    clickDrop
} from "../controllers/movements.js";

export const eventListeners = (tags) => {
    // Asignacion de Eventos de Casillas 
    tags.forEach((t) => {
        t.addEventListener( 'dragover', (e) => onDragOver(e) )
        t.addEventListener( 'dragleave', (e) => onDragLeave(e) )
        t.addEventListener( 'drop', (e) => onDrop(e) )
        t.addEventListener( 'click', (e) => clickDrop(e) )
    } );
}