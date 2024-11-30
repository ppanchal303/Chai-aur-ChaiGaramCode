const clock = document.querySelector('.time-box')

setInterval(function () {
  let d = new Date()
  hours = d.getHours()
  minutes = d.getMinutes()
  seconds = d.getSeconds()

  clock.innerHTML = d.toLocaleTimeString() //`${hours}:${minutes}:${seconds}`
}, 1000)
