clock = () =>{
  const date = new Date();
  var hours = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  if (hours < 10){
    hours = "0" + hours;
  }

  if (minute < 10){
    minute = "0" + minute;
  }

  if (second < 10){
    second = "0" + second;
  }

  document.getElementById('hour').innerHTML = hours + " :";
  document.getElementById('min').innerHTML = minute + " :";
  document.getElementById('sec').innerHTML = second;
}

setInterval(clock, 100)