module.exports = {
  url: 'http://vixen.com',
  elements: {
    body: 'body',
    searchButton: {
    	selector: '//span[contains(@class,"icon icon-search")]',
    	locateStrategy: 'xpath'
    },
    errorCrossIcon:'#mainContainer > div > div > div > div.status.status-error > span',
    searchTxtBx:'input[name=q]'
  }
}