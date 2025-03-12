export function getPaymentSystem(cardNumber) {
  const cardNumberStr = cardNumber.toString();

  if (/^4/.test(cardNumberStr)) {
    return "Visa";
  } else if (/^5[1-5]/.test(cardNumberStr)) {
    return "MasterCard";
  } else if (/^3[47]/.test(cardNumberStr)) {
    return "AmericanExpress";
  } else if (/^2/.test(cardNumberStr)) {
    return "Mir";
  } else if (/^6(?:011|5)/.test(cardNumberStr)) {
    return "Discover";
  } else {
    return "Unknown";
  }
}
