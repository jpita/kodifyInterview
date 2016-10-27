@vixen @search @searchResultsPage
Feature: vixen Search

Background:
  Given I open vixen's page
  Then the title is "VIXEN.com : Welcome To A New Era Of Erotica"

Scenario: Check the search button is present on vixen
  And the vixen search button exists

Scenario: Searching vixen
  When I search for "pita"
  Then I get no results