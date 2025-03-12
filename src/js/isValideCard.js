export function isValidCardNumber(cardNumber) {
  const digits = cardNumber.toString().split("").map(Number);
  let sum = 0;
  const parity = digits.length % 2;

  for (let i = 0; i < digits.length - 1; i++) {
    if (i % 2 !== parity) {
      sum += digits[i];
    } else if (digits[i] > 4) {
      sum += 2 * digits[i] - 9;
    } else {
      sum += 2 * digits[i];
    }
  }

  const checkDigit = digits[digits.length - 1];
  return checkDigit === (10 - (sum % 10)) % 10;
}
