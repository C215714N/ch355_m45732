// Bucle de creacion de Celdas
export const repeat = (total, tag, parent) => {
    let data = '';
    for(let i = 0; i < total; i++){
    data+=`<${tag} id="${tag == 'tr' ? parseInt(i + 1) :
        parent ? String.fromCharCode(i + 65) + parent : 
        String.fromCharCode(i + 65) }">
    </${tag}>`
    }
    return data;
}