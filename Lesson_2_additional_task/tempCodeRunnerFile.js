 let arr = ['1835', '4229', '7392', '1513', '5555', '3123', '7639'];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i].slice(0,1);
    if (num == 3 || num == 7) {
      console.log( arr[i] );
    } 
  }