const fs = require('fs');

// Считывает ошибки в консоли и прописывает в отдельном файле

// При помощи этих констант записываются только уникальные ошибки
const uniqueErrorMessages = new Set();
const uniqueWarningMessages = new Set();

function logConsoleMessages(page) {
  const errorLogFile = fs.createWriteStream('tests/logs/error.log', { flags: 'a' });
  const warningLogFile = fs.createWriteStream('tests/logs/warning.log', { flags: 'a' });

  page.on('console', async (msg) => {
    if (msg.type() === 'error') {
      const errorMessage = `Error: ${msg.text()}`;
      if (!uniqueErrorMessages.has(errorMessage)) {
        console.error(errorMessage);
        errorLogFile.write(errorMessage + '\n');
        uniqueErrorMessages.add(errorMessage);
      }
      // throw new Error('Console error detected. Test failed.');
    } else if (msg.type() === 'warning') {
      const warningMessage = `Warning: ${msg.text()}`;
      if (!uniqueWarningMessages.has(warningMessage)) {
        warningLogFile.write(warningMessage + '\n');
        uniqueWarningMessages.add(warningMessage);
      }
    }
  });
}

module.exports = { logConsoleMessages };