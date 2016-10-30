# Test for Kodify interview
## Selenium + BDD + NodeJS
### Why NightwatchJS?
For this test I decided to use [NightwatchJS](http://nightwatchjs.org/) as a framework to run the tests and [nightwatch-cucumber](https://github.com/mucsi96/nightwatch-cucumber) as a module to use BDD to write the tests.

The reason for this choice was the ranking of nightwatchJS on [github](https://github.com/search?o=desc&q=webdriver&s=stars&type=Repositories&utf8=%E2%9C%93) when searching for "webdriver". I tried with [webdriver.io](http://webdriver.io/) and [CodeceptJS](http://codecept.io/) but decided to go with NightwatchJS because of the acceptance and community support.

### How do I run the tests?
* Clone the repo to your machine 

```
git clone git@github.com:jpita/kodifyInterview.git
cd kodifyInterview
```

* Install dependencies

Depending on what you have installed on your pc you may or may not need to install all the packages mentioned below. You can start by running the command `nightwatch` and see if you are missing some packages, if you do you'll get a warning such as this:

![error dependencies missing](https://s12.postimg.org/4rakoe6u5/Screen_Shot_2016_10_29_at_01_29_21.png)

If you see the error feel free to install whatever package you are missing, in my case these are the ones missing after I clone the repo:

```
npm install nightwatch
npm install cucumber
npm install nightwatch-cucumber
npm install selenium-server
npm install phantomjs-prebuilt
npm install chromedriver
```
Make sure you have Google Chrome installed.

* Running the tests

After you've installed everything you can run the tests using the command `nightwatch`.

Chrome will open and you'll see the tests running.

### Results

After the tests finish you can check the html report by running the command `open reports/cucumber.html`.

In case of an error the screen shots will be kept inside the `screenshots/default` folder under the tests name.

### Notes

* These tests were written using the [page object design pattern](http://nightwatchjs.org/guide#page-objects). I've been using it throughout all my career and is the most used design pattern when writing automated UI tests.

* Being the first time I've used this framework and being a long time since I used JS to write tests, the tests are really simple. I've used some clicks, set values, waits and asserts methods to cover the most basic and fundamental things selenium webdriver can do on a browser.

* I didn't dig deep into how nightwatchJS works regarding running tests in paralel or inside a CI tool, but a simple google query returned a lot of results from the community and from [nightwatchJS documentation](http://nightwatchjs.org/guide#parallel-running) itself. The same goes for [unit tests](http://nightwatchjs.org/guide#unit-testing), thing I never did before.

