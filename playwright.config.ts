import { PlaywrightTestConfig } from '@playwright/test';
const config: PlaywrightTestConfig = {
    globalSetup: require.resolve('./global-setup'),
    globalTeardown:require.resolve('./global-teardown'),
    timeout: 50000,
    fullyParallel: false,
   
  use: {
    baseURL: 'https://curly-ext01.swinfra.net:9320/',
    //browserName: 'chrome',
    headless: false,
    //viewport: { width: 1280, height: 720 },
    viewport: { width: 1000, height: 500 },
    ignoreHTTPSErrors: true,
    //video: 'on-first-retry',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video : "retain-on-failure",
    contextOptions : {
      recordVideo:{
        dir:'./videos'
      }
    },
    
  },

  projects: [
    {
      name: 'PreRequisites',
      testDir:'./tests/specs/prerequisites-specs',
      testMatch: '*.spec.ts',
      retries: 0,
      fullyParallel: false,
    },
    {
      name: 'E2E_FeatureTests',
      testDir: './tests/specs/parallel-specs',
      testMatch: '*.spec.ts',
      retries: 0,
      fullyParallel: false,
    },
  ],

  //reporter: 'line',
  //reporter: [ ['junit', { outputFile: 'results.xml' }] ],
  reporter:[
    ["dot"],
    ["json", {
    outputFile  : "jsonReporters/jsonReport.json"
  }], 
  ["html", {
    open:"never"
  }],
  ['allure-playwright']
],


  
};
export default config;
