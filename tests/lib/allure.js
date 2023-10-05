// Добавляет к отчету в Allure интерактивную страницу (использовать при падении теста)

export async function pageSource(page) {

    // Получить HTML
    const pageSource = await page.content();

    // Получить CSS
    const cssStyles = await page.evaluate(() => {
        const styleTags = document.querySelectorAll('style');
        const styles = [];
    
        for (const styleTag of styleTags) {
          styles.push(styleTag.textContent);
        }
    
        return styles.join('\n');
    });

    const htmlWithStyles = `
    <html>
      <head>
        <style>${cssStyles}</style>
      </head>
      <body>
        ${pageSource}
      </body>
    </html>
    `;

    return htmlWithStyles;

};