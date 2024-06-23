// const formEl = document.querySelector(".form");
// const inputEl = document.querySelectorAll(".form-input");

// formEl.addEventListener("submit", onSubmit);
// inputEl.forEach((input) => {
//   input.addEventListener("input", onInput);
// });

// function onSubmit(event) {
//   event.preventDefault();

//   const name = event.currentTarget.name.value;
//   const number = event.currentTarget.number.value;

//   console.log("Name:", name);
//   console.log("Phone number:", number);
// }

// function onInput(event) {
//   const values = event.target.value;

//   console.log(values);
// }

/*  */

export const formEl = document.querySelector(".form");
export const inputEl = document.querySelectorAll(".form-input");

formEl.addEventListener("submit", onSubmit);
inputEl.forEach((input) => {
  input.addEventListener("input", onInput);
});

export function onSubmit(event) {
  event.preventDefault();

  const name = event.currentTarget.name.value;
  const number = event.currentTarget.number.value;

  console.log("Name:", name);
  console.log("Phone number:", number);
}

export function onInput(event) {
  const values = event.target.value;

  console.log(values);
}