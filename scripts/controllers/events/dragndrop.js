import { d } from "../../models/global.js";
// Funciones Arrastrar y Soltar
export const 
onDrag = (e) => e.dataTransfer.setData('piece', e.target.id),
onDragOver = (e) => {
    e.preventDefault()
    e.target.classList.add('dragover')
},
onDragLeave = (e) => e.target.classList.remove('dragover'),
onDrop = (e) => {
    const dragged = e.dataTransfer.getData('piece')
    const piece = d.getElementById(dragged)
    e.target.append(piece)
    e.target.classList.remove('dragover')
}