function main() {
    'use strict';
    ///сюда все ваши скрипты
    // alert( "1"[0] )
}
main(); 
////////////////
//let y = 1; let x = y = 2;  
// let a = [ ] + 1 + 2 ;
let a = 2 && 1 && null && 0 && undefined ;
console.log(typeof(a));
// console.log(typeof(a));


let arr = ['1835', '4229', '7392', '1513', '5555', '3123', '7639'];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(0,1) == 3 || arr[i].slice(0,1) == 7 ) {
      console.log( arr[i] );
    }
  }