var seleniumServer = require('selenium-server')
var phantomjs = require('phantomjs-prebuilt')
var chromedriver = require('chromedriver')

require('nightwatch-cucumber')()

module.exports = {
  custom_commands_path: '',
  custom_assertions_path: '',
  page_objects_path: 'page-objects',
  live_output: false,
  disable_colors: false,
  openReport: true,

  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    host: '127.0.0.1',
    port: 4443
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 4443 ,
      selenium_host: 'localhost',
      silent: true,
      screenshots : {
        enabled : true,
        on_failure : true,
        path: 'screenshots/default'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    },

    chrome: {
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    },

    firefox: {
      desiredCapabilities: {
        browserName: 'firefox',
        javascriptEnabled: true,
        acceptSslCerts: true
      }
    }
  }
}