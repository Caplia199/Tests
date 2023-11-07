const { expect } = require('@playwright/test');
const { Page } = require('./page')
const { menu, productPageLocators, mainPageLocators, removeProductLocators } = require('../statick/locators');

export class MainPage extends Page {
    constructor(page, locators) {
        super();
        this.page = page;
        this.locators = locators;
    }

    async openMenu(){
        await super.buttonClick(menu);
        for (let key in menu) {
            await expect(await this.page.locator(menu[key])).toBeVisible();
        };
    };

    async logout(){
        await super.buttonClick(menu.logout);
    };

    async addProduct(product){
        await super.buttonClick(mainPageLocators[product]);
    };

    async removeProduct(product){
        await super.buttonClick(removeProductLocators[product]);
    };

    async howProductInBasket(){
        let shoppingCartBadge = await this.page.$('.shopping_cart_badge');
        let badgeText = await shoppingCartBadge.innerText();
        return badgeText;
    };

    async openProduct(){
        await super.buttonClick(mainPageLocators.product);
        for (let key in productPageLocators) {
            await expect(await this.page.locator(productPageLocators[key])).toBeVisible();
        };
    };

    async backToProducts(){
        await super.buttonClick(productPageLocators.backToProducts);
    };

    async sortOpen(){
        await super.buttonClick(mainPageLocators.sort);
    };

    async sortBy(optionValue){
        const selectElement = await this.page.$('.product_sort_container');
        await selectElement.selectOption({ value: optionValue })
    };

    async expectSort(sortOption){

        // For now, I haven't found a better way to verify the correctness of sorting a list of items specifically for this case
        // If you have any ideas regarding this, I'd be happy to discuss 😄

        const inventoryItems = await this.page.$$('.inventory_list .inventory_item');

        let isSorted = true;
        
        switch (sortOption) {
            case 'Name (A to Z)':
                for (let i = 0; i < inventoryItems.length - 1; i++) {
                    const item1 = await inventoryItems[i].textContent();
                    const item2 = await inventoryItems[i + 1].textContent();
                
                    if (item1.localeCompare(item2) > 0) {
                      isSorted = false;
                      break;
                    }
                  }
                break;

            case 'Name (Z to A)':
                for (let i = 0; i < inventoryItems.length - 1; i++) {
                    const item1 = await inventoryItems[i].textContent();
                    const item2 = await inventoryItems[i + 1].textContent();
                
                    if (item1.localeCompare(item2) < 0) {
                      isSorted = false;
                      break;
                    }
                  }
                break;

            case 'Price (low to high)':
                for (let i = 0; i < inventoryItems.length - 1; i++) {
                    const item1Price = await inventoryItems[i].$('.inventory_item_price');
                    const item2Price = await inventoryItems[i + 1].$('.inventory_item_price');
                
                    if (item1Price && item2Price) {
                      const price1 = await item1Price.innerText();
                      const price2 = await item2Price.innerText();
                
                      if (parseFloat(price1.substr(1)) > parseFloat(price2.substr(1))) {
                        isSorted = false;
                        break;
                      }
                    }
                  }
                break;

            case 'Price (high to low)':
                for (let i = 0; i < inventoryItems.length - 1; i++) {
                    const item1Price = await inventoryItems[i].$('.inventory_item_price');
                    const item2Price = await inventoryItems[i + 1].$('.inventory_item_price');
                
                    if (item1Price && item2Price) {
                      const price1 = await item1Price.innerText();
                      const price2 = await item2Price.innerText();
                
                      if (parseFloat(price1.substr(1)) < parseFloat(price2.substr(1))) {
                        isSorted = false;
                        break;
                      }
                    }
                  }
                break;

        };

        await expect(isSorted).toBe(true);

    };

    async goToBusket(){
        await super.buttonClick(mainPageLocators.shoppingCartButton);
    };
    
    async whatPrice(){
        const priceElement = await this.page.locator('//*[@id="inventory_container"]/div/div[5]/div[2]/div[2]/div').first();
        const price = await priceElement.textContent();
        return price;
    };

};