// Написать любую анимацию, используя requestAnimationFrame и кнопку, активирующую её

// box.onclick = function() {

    train.onclick = function() {
        animate(function(timePassed) {
          train.style.left = timePassed / 5 + 'px';
        }, 2000);
      };
  
      // Рисует функция draw
      // Продолжительность анимации duration
      function animate(draw, duration) {
        var start = performance.now();
  
        requestAnimationFrame(function animate(time) {
          // определить, сколько прошло времени с начала анимации
          var timePassed = time - start;
  
          console.log(time, start)
            // возможно небольшое превышение времени, в этом случае зафиксировать конец
          if (timePassed > duration) timePassed = duration;
  
          // нарисовать состояние анимации в момент timePassed
          draw(timePassed);
  
          // если время анимации не закончилось - запланировать ещё кадр
          if (timePassed < duration) {
            requestAnimationFrame(animate);
          }
  
        });
      }
/////////////////////////////////////////////////////////////
// let btn = document.querySelector('.btn'), // кнопка
//     elem = document.querySelector('.box'); // квадрат 

// function myAnimation() {
//     let pos = 0;// начальная позиция

//     let id = setInterval(frame, 10); // через каждые 10мс запускаем функцию frame
//     let way = 0;

//     function frame () { // кадр
//         if (way == 1) {
//             if (pos == 0) {
//                 // way = 0;
//                 clearInterval(id);
//             }
//             pos--;
//             elem.style.top = pos  + 'px';
//             elem.style.left = pos + 'px';
//         } else if (way == 0) {
//             if (pos == 300) {
//                 way = 1;
//             }
//             pos++;
//             elem.style.top = pos + 'px';
//             elem.style.left = pos + 'px';
//         }
//     }
// }
// btn.addEventListener('click', myAnimation);

let btn = document.querySelector('.btn'), // кнопка
    elem = document.querySelector('.box'); // квадрат 

function myAnimation() {
    let pos = 0;// начальная позиция

    let id = setInterval(frame, 10); // через каждые 10мс запускаем функцию frame
    let way = 0;

    function frame () { // кадр
        if (way == 1) {
            if (pos == 0) {
                // way = 0;
                clearInterval(id);
            }
            pos--;
            elem.style.top = pos  + 'px';
            elem.style.left = pos + 'px';
        } else if (way == 0) {
            if (pos == 300) {
                way = 1;
            }
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}
btn.addEventListener('click', myAnimation);