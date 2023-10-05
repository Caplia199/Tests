
Все скриншоты на стороне lamdatest сравниваются с ранее выставленными "Baseline", при изменении како-го либо поля в конфиге необходимо будет установить новый "Baseline", с которым уже на второй прогон будут сравниваться скриншоты, которые были получены в результате теста (в будущем сделаю несколько проектов, которые будут корневыми).

Основные поля для изменения в capabilities (config.js):

1. browserName - проставляются доступные для labdatest браузеры (список браузеров ниже), все прогоняются на драйвере chromium встроенном в playwright. Также можно прогонять тесты на внутренних браузерах playwright, в таком случае нужно изменить драйвер на подходящий (конкретно webkit, chrome и firefox работают с chromium). Рекомендуется использрвать доступные для lamdatest браузеры (для изменения версии браузера).
    Доступные для lamdatest браузеры: pw-chromium, pw-webkit, pw-firefox

2. browserVersion - дефолтное значение "latest" выставляет последнюю версию браузера, изменения версии возможно только для доступных в lamdatest браузерах (смотри пункт 1). Полдолбнее о версиях по ссылке https://www.lambdatest.com/support/docs/playwright-test-execution-setup/

3. platform - Windows: 11, 10, 8, 8.1, 7; macOS: Monterey, Big Sur, Cataline, Mojave.

4. resolution - дефолтное разрешение 1920x1080, доступные разрешения по ссылке https://www.lambdatest.com/support/docs/playwright-test-execution-setup/#changing-desktop-resolutions