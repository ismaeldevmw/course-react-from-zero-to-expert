// const array = new Array(100); // no se recomienda hacerlo de está forma
// array.push(1);

const array = [1, 2, 3, 4];
// array.push(1); // tampoco se recomienda el uso de push
// array.push(2);
// array.push(3);
// array.push(4);

// de la misma forma tenemos que hacer uso del spread operator para que
// asigne correctamente los valores y no modifuque mi primer array
let array2 = [...array, 5];
// array2.push(5);

const array3 = array2.map(number => {
  return number * 2;
});


console.log(array);
console.log(array2);
console.log(array3);