module.exports = {
  url: 'https://www.vixen.com/search?q=pita',
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