function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;

  if (a > b) {

    [a, b] = [b, a];
  }
 
  for ( let i = a; i <= b; i++) {
    producto *= i; 
  } 
  if (producto === 0) {
    return 0; 
  } else{
    return producto;
  }
}

module.exports = productoEntreNúmeros;