const form = document.querySelector('form')

form.addEventListener('submit', e => {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#result')

  if (height <= 0 || height == '' || isNaN(height)) {
    results.innerHTML = `Please enter a valid height. Current value is ${height}`
  } else if (weight <= 0 || weight == '' || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight. Current value is ${weight}`
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2)
    results.innerHTML = bmi
  }
})
