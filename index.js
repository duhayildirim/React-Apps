import getData from "./exercise-1.js";

getData(1)
  .then(data => console.log(data))
  .catch(err => console.log(err))