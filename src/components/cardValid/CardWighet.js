import { isValidCardNumber } from "../../js/isValideCard";
import { getPaymentSystem } from "../../js/getPaymentCard";
import visaCard from "../../img/visa.png";
import MasterCard from "../../img/mkard.png";
import AmericanExpress from "../../img/america.png";
import Mir from "../../img/mir.png";
import Discover from "../../img/discover.png";

export default class CardWighet {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onSubmit = this.onSubmit.bind(this);
  }

  static get makup() {
    return `
        <form class="card">
          <div class="payment-system">
            <div class="img-disable" id="Visa"><img src="${visaCard}" alt=""></div>
            <div class="img-disable" id="MasterCard"><img src="${MasterCard}" alt=""></div>
            <div class="img-disable" id="AmericanExpress"><img src="${AmericanExpress}" alt=""></div>
            <div class="img-disable" id="Mir"><img src="${Mir}" alt=""></div>
            <div class="img-disable" id="Discover"><img src="${Discover}" alt=""></div>
          </div>
        <input class="card-number" type="text">
        <button class="submit">Click to Validate</button>
        </form>
        `;
  }

  static get submitSelector() {
    return ".submit";
  }

  static get inputSelector() {
    return ".card-number";
  }

  static get selector() {
    return ".card";
  }

  bindToDom() {
    this.parentEl.innerHTML = CardWighet.makup;

    this.element = this.parentEl.querySelector(CardWighet.selector);
    this.submit = this.element.querySelector(CardWighet.submitSelector);
    this.input = this.element.querySelector(CardWighet.inputSelector);

    this.element.addEventListener("submit", this.onSubmit);
  }

  onSubmit(e) {
    e.preventDefault();

    const value = this.input.value;
    if (isValidCardNumber(value)) {
      const payment = getPaymentSystem(value);
      this.resetCardImages();
      this.selectCardImg(payment);
      alert("Платежная система:" + payment);
    } else {
      alert("Не корректный номер карты");
    }
  }

  resetCardImages() {
    const images = this.element.querySelectorAll(".payment-system div");
    images.forEach((img) => {
      img.classList.add("img-disable");
      img.classList.remove("img-active");
    });
  }

  selectCardImg(image) {
    const changeImage = this.element.querySelector("#" + image);
    changeImage.classList.add("img-active");
    changeImage.classList.remove("img-disable");
  }
}
