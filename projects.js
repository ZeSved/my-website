setInterval(() => {
  // Gets the time
  const time = new Date()

  // Puts the time into easier to use variables
  const t = {
    hours: time.getHours(),
    minutes: time.getMinutes(),
  }

  // Gets the HTML element classes
  const tim = document.querySelector('.time')

  // Makes the different time types are always the same size
  t.minutes < 10 && (t.minutes = '0' + t.minutes)
  t.hours < 10 && (t.hours = '0' + t.hours)

  // Displays the now processed time types in the website
  tim.innerText = `${t.hours}:${t.minutes}`
}, 1)