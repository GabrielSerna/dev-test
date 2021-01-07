var cats = 5;
var inLine = 2;
inline = 50;

console.log('actual vars\n' + 'cats: ' + cats + '\ninLine: ' + inLine + '\ninline: ' + inline)

inline = inline + inLine

console.log('actual vars\n' + 'cats: ' + cats + '\ninLine: ' + inLine + '\ninline: ' + inline)

inline = cats + inline + inLine

console.log('actual vars\n' + 'cats: ' + cats + '\ninLine: ' + inLine + '\ninline: ' + inline)

var numLines = Math.ceil(cats/inLine);

var missing = (numLines*inLine)-cats;

console.log(cats + ' gatti in fila per ' + inLine + ' si unirono compatti in ' + numLines + ' file. Nell ultima fila rimasero ' + missing + ' posto gatto disponibili.');
