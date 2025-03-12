import { isValidCardNumber } from "../isValideCard";

test("valide card number", () => {
  const card = 4556204097957763;
  const rezult = isValidCardNumber(card);

  expect(rezult).toBe(true);
});

test("not valide card number", () => {
  const card = "65445562040979577638956746670495";
  const rezult = isValidCardNumber(card);

  expect(rezult).toBe(false);
});
