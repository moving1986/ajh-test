import { getPaymentSystem } from "../getPaymentCard";

test('valid visa', () => {
    const card = 4485940447388581;
    const rezult = getPaymentSystem(card);
    expect(rezult).toBe('Visa');
});

test('valid MasterCard', () => {
    const card = 5310042395386077;
    const rezult = getPaymentSystem(card);
    expect(rezult).toBe('MasterCard');
});

test('valid AmericanExpress', () => {
    const card = 345743642535313;
    const rezult = getPaymentSystem(card);
    expect(rezult).toBe('AmericanExpress');
});

test('valid Discover', () => {
    const card = 6011860512292500;
    const rezult = getPaymentSystem(card);
    expect(rezult).toBe('Discover');
});

test('valid Mir', () => {
    const card = 222340512292500;
    const rezult = getPaymentSystem(card);
    expect(rezult).toBe('Mir');
});

test('valid Unknown', () => {
    const card = 7222340512292500;
    const rezult = getPaymentSystem(card);
    expect(rezult).toBe('Unknown');
});