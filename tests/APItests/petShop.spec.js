const { test, expect } = require('@playwright/test');
const { Pets } = require('./lib/modiles/pets');

const pets = new Pets;

test.describe('Pet Shop', () => {

    // test('All pets', async () => {


    // });

    test('One pet', async ({ request }) => {

        const pet = await pets.getOnePets(request, '2');

        expect(pet.status()).toBe(200);

    });

});