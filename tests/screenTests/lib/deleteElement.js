// Используются для закрашивания не статичных элементов теста
// К примеру если стоимость чего-либо периодически меняется, но нужно учитывать что плашка со стоимостью остается на месте

// УДАЛЯЕТ ЭЛЕМЕНТ СО СТРАНИЦЫ
export async function deleteElement (page, id) {

    await page.evaluate(() => {
        const elementToRemove = document.getElementById(id);
        if (elementToRemove) {
          elementToRemove.remove(); 
        }
      });
      
};

// ЗАКРАШИВАЕТ ЭЛЕМЕНТ
export async function paintElement (page, element) {

    await page.$eval(element, (elem) => {
        elem.style.backgroundColor = 'white';
        elem.style.color = 'white';
        elem.style.border = 'none';
        elem.style.textIndent = '-9999px';
    });

};

