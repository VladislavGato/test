function main() {
  'use strict';
  
  //// первая часть усложненного задания
  let week = [
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота',
    'воскресенье'
  ];

  let div = document.createElement('div');
  div.className = "alert";
  div.innerHTML = week[0];

  document.body.appendChild(div, document.body.firstChild);
  
  let div2 = div.cloneNode(true);
  div2.innerHTML = week[1];
  div.parentNode.insertBefore(div2, div.nextSibling);

  let div3 = div2.cloneNode(true);
  div3.innerHTML = week[2];
  div2.parentNode.insertBefore(div3, div2.nextSibling);

  let div4 = div3.cloneNode(true);
  div4.innerHTML = week[3];
  div3.parentNode.insertBefore(div4, div3.nextSibling);

  let div5 = div4.cloneNode(true);
  div5.className = "alert alert3";
  div5.innerHTML = week[4];
  div4.parentNode.insertBefore(div5, div4.nextSibling);

  let div6 = div5.cloneNode(true);
  div6.className = "alert alert2";
  div6.innerHTML = week[5];
  div5.parentNode.insertBefore(div6, div5.nextSibling);

  let div7 = div6.cloneNode(true);
  div7.innerHTML = week[6] ;
  div6.parentNode.insertBefore(div7, div6.nextSibling);

  ///// вторая часть усложненного задания
  //Вывести в консоль только те, что начинаются с цифры 3 или 7
  
  let arr = ['1835', '4229', '7392', '1513', '5555', '3123', '7639'];

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i].slice(0,1);
    if (num == 3 || num == 7) {
      console.log( arr[i] );
    } 
  }

}

main();