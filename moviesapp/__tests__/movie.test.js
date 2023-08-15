const {Builder,Browser, By, until}=require('selenium-webdriver')


let driver;
// Build a new driver for each test
beforeEach(async () => {
    driver = await new Builder().forBrowser(Browser.CHROME).build();
  });
  
  // Quit a driver after each test
  afterEach(async () => {
    await driver.quit();
  });

  describe('Test the movie app', ()=>{
    test('Can delete a movie', async()=>{
        await driver.get('http://localhost:3000/')
        //add func from demo
        await driver.findElement(By.css('input[name="movieTitle"]')).sendKeys('The Fight Club');
        // await driver.sleep(2000)
        await driver.findElement(By.css('button[type="submit"]')).click();
        const addedMovie = await driver.wait(until.elementLocated(By.css('#movies-list li label')), 1000);
        // await driver.sleep(2000)
        expect(await addedMovie.getText()).toBe('The Fight Club');
        // await driver.sleep(2000)

        //delete movie
        await driver.findElement(By.css('#movies-list li button')).click()
        // await driver.sleep(2000)
        await driver.wait(until.stalenessOf(addedMovie),1000)
        const moviesList = await driver.findElements(By.css('#movies-list li'));
        expect(moviesList.length).toBe(0);

        // delete message check
         const message=await driver.wait(until.elementLocated(By.css('aside')),1000)
         expect(await message.getText()).toBe('The Fight Club deleted!');
         
         //watched button
        //  await driver.findElement(By.css('#movies-list li input[type="checkbox"]'),1000)

        
       

       

        

    })
    
  })

