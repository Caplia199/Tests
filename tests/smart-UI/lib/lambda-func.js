async function takeScreen( page, name ) {
    await page.evaluate((_) => { }, 
        `lambdatest_action: ${JSON.stringify({ 
            action: 'smartui.takeScreenshot', 
            arguments: { 
                fullpage: true, 
                screenshotName: name 
            } 
        })}`
    );
}

async function setStatus( page, status, remarc ) {
    await page.evaluate((_) => { }, 
        `lambdatest_action: ${JSON.stringify({ 
            action: 'setTestStatus', 
            arguments: { 
                status: status, 
                remark:  remarc
            } 
        })}`
    );
}

const lambda = { takeScreen, setStatus };

module.exports = lambda;