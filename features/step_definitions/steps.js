module.exports = function () {
  this.Given(/^I open vixen's page$/, function () {
    var vixen = this.page.vixen()

    vixen
      .navigate()
      .waitForElementVisible('@body', 1000)
  })

  this.Then(/^the vixen search button exists$/, function () {
        var vixen = this.page.vixen()

    vixen.assert.visible('@searchButton')
  })

  this.Then(/^the title is "([^"]*)"$/, function (title) {
        var vixen = this.page.vixen()

    this.assert.title(title)
  })

  this.Then(/^I search for "([^"]*)"$/, function (text) {
        var vixen = this.page.vixen()

    vixen.waitForElementVisible('@searchButton', 3000)
    vixen.click('@searchButton').setValue('@searchTxtBx', [text, this.Keys.ENTER])
  })

  this.Then(/^I get no results$/, function () {
    var searchResults = this.page.searchResultsPage()
    searchResults.waitForElementVisible('@errorCrossIcon', 3000)
    searchResults.assert.visible('@errorCrossIcon')
  })
}