//Microondas

function microondas (comida, tempo) {
    let padraoTempo

if (comida == 'pipoca') {
    padraoTempo = 10;
}
else if (comida == 'macarrao') {
    padraoTempo = 8;
}
else if (comida == 'carne') {
    padraoTempo = 15;
} 
else if (comida == 'feijao') {
    padraoTempo = 12;
}
else if (comida == 'brigadeiro') {
    padraoTempo = 8;
}
else {
    return 'Prato Inexistente'
}
if (tempo < padraoTempo) {
    return 'Tempo insuficiente'
}
else if (tempo == padraoTempo) {
    return 'A comida está pronta :D'
}
else if (tempo > (2 * padraoTempo) && tempo <= (3 * padraoTempo)) {
    return 'A comida queimou :('
}
else if (tempo > 3 * padraoTempo) {
    return 'KKAABBBUUUUUUMMMMM!!!!'
}
}
console.log (microondas ('macarrao',3) + 'Prato pronto, bom apetite!!')