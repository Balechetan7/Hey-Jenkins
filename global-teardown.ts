//global-teardown.ts
const exec = require('child_process').execSync;
async function globalSetup() {
    //await exec('npx xunit-viewer -r  results.xml -o results.html ')
    await exec('npx allure generate --clean allure-results ')
    await exec('snapGraphFromChrome.bat ')
    //await exec('SnipReport.bat ')
    //await exec('npx allure open ')
  };
export default globalSetup;