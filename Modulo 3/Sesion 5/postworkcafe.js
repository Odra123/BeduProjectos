import {Selector} from 'testcafe';

fixture`Getting Started`
    .page`http://localhost:8080/`;

test('My first test', async t => {
    await t
    .click('input[data-test-id="number-to-calculate-fibonacci"]')
        .pressKey('ctrl+a delete')
        .typeText('input[data-test-id="number-to-calculate-fibonacci"]', '7')
        .click('button[data-test-id="calculate-button"]')
        .wait(1000)
        // Usa las verificaciones pra checar si el valor actual corresponde con el vlaor esperado

        .expect(Selector('span[data-test-id="result"]').innerText).eql('13');
     
})
test('My second test', async t => {
    await t
        .click('input[data-test-id="number-to-calculate-fibonacci"]')
        .pressKey('ctrl+a delete')
        .typeText('input[data-test-id="number-to-calculate-fibonacci"]', 'd')
        
        .click('button[data-test-id="calculate-button"]')
        .wait(1000)
        // Usa las verificaciones pra checar si el valor actual corresponde con el vlaor esperado

        .expect(Selector('span[data-test-id="result"]').innerText).eql('');
     
})
test('My third test', async t => {
    await t
    .click('input[data-test-id="number-to-calculate-fibonacci"]')
        .pressKey('ctrl+a delete')
        .typeText('input[data-test-id="number-to-calculate-fibonacci"]', '-2')
        .click('button[data-test-id="calculate-button"]')
        .wait(1000)
        // Usa las verificaciones pra checar si el valor actual corresponde con el vlaor esperado

        .expect(Selector('span[data-test-id="result"]').innerText).eql('');
     
})
test('My fourth test', async t => {
    await t
    .click('input[data-test-id="number-to-calculate-fibonacci"]')
        .pressKey('ctrl+a delete')
        .typeText('input[data-test-id="number-to-calculate-fibonacci"]', '@')
        .click('button[data-test-id="calculate-button"]')
        .wait(1000)
        // Usa las verificaciones pra checar si el valor actual corresponde con el vlaor esperado

        .expect(Selector('span[data-test-id="result"]').innerText).eql('');
     
})
test('My fifth test', async t => {
    await t
    .click('input[data-test-id="number-to-calculate-fibonacci"]')
        .pressKey('ctrl+a delete')
        .typeText('input[data-test-id="number-to-calculate-fibonacci"]', '1234')
        .click('button[data-test-id="calculate-button"]')
        .wait(1000)
     
        // Usa las verificaciones pra checar si el valor actual corresponde con el vlaor esperado

        .expect(Selector('span[data-test-id="result"]').innerText).eql('3.4774673918037014e+257');
     
})
test('My sixth test', async t => {
    await t
    .click('input[data-test-id="number-to-calculate-fibonacci"]')
        .pressKey('ctrl+a delete')
        .typeText('input[data-test-id="number-to-calculate-fibonacci"]', '1477')
        .click('button[data-test-id="calculate-button"]')
        .wait(1000)
     
        // Usa las verificaciones pra checar si el valor actual corresponde con el vlaor esperado

        .expect(Selector('span[data-test-id="result"]').innerText).eql('Infinity');
     
})
