// TODO: write code here

import CardWighet from "../components/cardValid/CardWighet";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");
  const form = new CardWighet(container);

  form.bindToDom();
});
