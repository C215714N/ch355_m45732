import { box } from '../models/selectors.js';
import { onDrag } from '../controllers/events/dragndrop.js';
import { clickDrag } from '../controllers/events/click.js';

export const addPiece = (color, piece, index) => {
    let img = document.createElement('img');
    // Asignacion de Atributos
    Object.assign(img, {
        src: `assets/${color}${piece}.svg`,
        id: `${color}${piece}${index}`,
        alt: `${color}${piece}`,
        draggable: true
    } )
    box.append(img);
    img.onclick = (e) => clickDrag(e);
    img.ondragstart = (e) => onDrag(e);
}