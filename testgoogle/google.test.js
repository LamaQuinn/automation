const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

let driver;

beforeAll(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterAll(async () => {
  await driver.quit();
});

test("can search Google for 'automation'", async () => {
  // TODO Navigate to google.com
    await driver.get("https://www.google.com/");
  // TODO Uncomment the line below and replace SEARCH_BAR_NAME with the name of the search bar element
  await driver.findElement(By.name('q')).sendKeys("automation", Key.RETURN);

  // Wait for the results page to load
  await driver.wait(until.titleIs("automation - Google Search"), 1000);
});

test("can search Google twice", async () => {
  // Fix the TODOs below to finish the test
  // TODO Navigate to google.com
  await driver.get("https://www.google.com/");
  // TODO Search for something in Google and wait for the page to load
  const searchInput=await driver.findElement(By.name('q'));
  await searchInput.sendKeys('naruto',Key.RETURN);
  await driver.wait(until.titleIs("naruto - Google Search"), 1000);
  // TODO Call .clear() on the search bar element to clear the old search term
  //need to re-locate the element after the navigation
  const newSearch=await driver.findElement(By.name('q'));
  await newSearch.clear();
  // TODO Call .sendKeys() on the search bar element to search for a new term

  await newSearch.sendKeys('new search', Key.RETURN);
  // TODO Wait for the results page to load
  await driver.wait(until.titleIs("new search - Google Search"), 1000);
});
