Feature: Error Page
  Covering all Eror Page Requirements by Test Scenarios

  Scenario: REQ-UI-07 When I click on the Error button, I should get a 404 HTTP response code
    Given Home website URL Link 'http://uitest.duodecadits.com'
    When I click on the Error Tab
    Then I should get a 404 HTTP Response code