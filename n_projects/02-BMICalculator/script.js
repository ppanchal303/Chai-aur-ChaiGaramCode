const form = document.querySelector('form')

form.addEventListener('submit', e => {
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#result')
  const subResults = document.querySelector('#sub-result')

  if (height <= 0 || height == '' || isNaN(height)) {
    results.innerHTML = `Please enter a valid height. Current value is ${height}`
  } else if (weight <= 0 || weight == '' || isNaN(weight)) {
    results.innerHTML = `Please enter a valid weight. Current value is ${weight}`
  } else {
    const bmi = (weight / (height / 100) ** 2).toFixed(2)
    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is ${bmi}.`
      subResults.innerHTML = `You are underweight.`
    } else if (bmi >= 18.6 && bmi < 24.9) {
      results.innerHTML = `Your BMI is ${bmi}.`
      subResults.innerHTML = `You are within normal range.`
    } else {
      results.innerHTML = `Your BMI is ${bmi}.`
      subResults.innerHTML = `You are overweight.`
    }
  }
})
