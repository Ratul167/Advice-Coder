
async function advice() {
  const url = 'https://api.adviceslip.com/advice'
  const response = await fetch(url);
  let data = await response.json();
  let advice = (data['slip']['advice'])
  console.log(advice);
  document.getElementById("advice").innerHTML = advice;
}

advice()
