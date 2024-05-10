import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  form: document.querySelector('form.form'),
  delay: document.querySelector("input[name='delay']"),
  step: document.querySelector("input[name='step']"),
  amount: document.querySelector("input[name='amount']"),
};

refs.form.addEventListener('submit', promiseGenerator);

function promiseGenerator(event) {
  event.preventDefault();
  let delayValue = Number(refs.delay.value);
  for (let i = 1; i <= refs.amount.value; i++) {
   
    createPromise(i, delayValue)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled Promise ${position}  in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`Rejected Promisw ${position} in ${delay}ms`);
      });
      delayValue +=Number(refs.step.value);
  }
  
}
function createPromise(position, delay) {
  return new Promise((resolve, rejected) => {
    const shouldResolve = Math.random() > 0.3;
    if (shouldResolve) {
      resolve({ position, delay });
    } else {
      rejected({ position, delay });
    }
  });
}