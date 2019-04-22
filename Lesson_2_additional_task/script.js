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
 //Текущий день - курсивом пока можно задать текущий день вручную, без работы с объектом даты
 // текущий день пока что задал просто как 4
  for (let i = 0; i < week.length; i++) {
    let div = document.createElement('div'),
    p = document.createElement('p');

    if ( week[i] == 'суббота' || week[i] == 'воскресенье' ) {
      div.classList.add('alert', 'alert2');
    } else if ( i == 4 ) {
      div.classList.add('alert', 'alert3');
    } else {
      div.classList.add('alert');
    }

    document.body.appendChild(div);
    div.appendChild(p);
    p.innerHTML = week[i];
  }

  // for (let i = 0; i < week.length; i++) {
  //   let div = document.createElement('div'),
  //   p = document.createElement('p');

  //   if ( i == 6 || i == 5 ) {
  //     div.classList.add('alert', 'alert2');
  //   } else if ( i == 4 ) {
  //     div.classList.add('alert', 'alert3');
  //   } else {
  //     div.classList.add('alert');
  //   }

  //   document.body.appendChild(div);
  //   div.appendChild(p);
  //   p.innerHTML = week[i];
  // }

//////// второй вариант без создавания тега <p>
  // for (let i = 0; i < week.length; i++) {
  //   let div = document.createElement('div');

  //   if ( i == 6 || i == 5 ) {
  //     div.classList.add('alert', 'alert2');
  //   } else if ( i == 4 ) {
  //     div.classList.add('alert', 'alert3');
  //   } else {
  //     div.classList.add('alert');
  //   }

  //   div.innerHTML = week[i];
  //   document.body.appendChild(div);
  // }

  ///// вторая часть усложненного задания
  //Вывести в консоль только те, что начинаются с цифры 3 или 7
  
  let arr = ['1835', '4229', '7392', '1513', '5555', '3123', '7639'];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].slice(0,1) == 3 || arr[i].slice(0,1) == 7 ) {
      console.log( arr[i] );
    }
  }

}

main();