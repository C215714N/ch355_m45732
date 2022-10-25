import { box } from '../models/declarations.js';
import { clickDrag, onDrag } from "../controllers/movements.js";

export const addPiece = (color, piece, index) => {
    let img = document.createElement('img');
    // Asignacion de Atributos
    Object.assign(img, {
        src: `assets/${color}${piece}.svg`,
        id: `${color}${piece}${index}`,
        alt: `${color}${piece}`,
        draggable: true
    } )
    box.appendChild(img);
    img.addEventListener('click', (e) => clickDrag(e));
    img.addEventListener('dragstart', (e) => onDrag(e));
}