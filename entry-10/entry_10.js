const countdown = () => {
  const countDate = new Date('July 28, 2028 00:00:00').getTime();
  const now = new Date();
  const gap = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const year = day * 365

  const textYear = Math.floor(gap / year);
  const textDay = Math.floor((gap % year) / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  document. querySelector('.year').innerText =textYear;
  document. querySelector('.day').innerText =textDay;
  document. querySelector('.hour').innerText =textHour;
  document. querySelector('.minute').innerText =textMinute;
  document. querySelector('.second').innerText =textSecond;
};

setInterval(countdown, 1000);

var counter = 1;
setIntercal(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 8){
    counter = 1;
  }
}, 5000);