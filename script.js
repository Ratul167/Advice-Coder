


(async () => {
  const url = 'https://api.adviceslip.com/advice'
  const response = await fetch(url);
  let data = await response.json();
  //  console.log(data);
  let advice = (data['slip']['advice'])
  console.log(advice);


  document.getElementById("advice").innerHTML = advice;
})();


async function advice() {
  const url = 'https://api.adviceslip.com/advice'
  const response = await fetch(url);
  let data = await response.json();
  let advice = (data['slip']['advice'])
  console.log(advice);
  document.getElementById("advice").innerHTML = advice;
}