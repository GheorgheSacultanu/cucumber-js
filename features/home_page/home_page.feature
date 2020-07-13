Feature: Home Page
  Covering all Home Page Requirements by Test Scenarios

  Scenario: REQ-UI-03 When I click on the Home button, I should get navigated to the Home page
    Given URL Link 'http://uitest.duodecadits.com'
    When I click on the Home button
    Then I should get navigated to the Home page

  Scenario: REQ-UI-08 When I click on the UI Testing button, I should get navigated to the Home page
    Given URL 'http://uitest.duodecadits.com'
    When I click on the UI Testing button
    Then I should get redirected to the Home Page

  Scenario: REQ-UI-04 When I click on the Home button, it should turn to active status
    Given Open URL 'http://uitest.duodecadits.com'
    When I will click on Home Button
    Then It should turn to active status and the navigation bar should be visible

  Scenario: REQ-UI-09 The following text should be visible on the Home page in <h1> tag: "Welcome to the Docler Holding QA Department"
    Given Home Page 'http://uitest.duodecadits.com'
    When I check the Page Header
    Then The expeted text should be visible on the Home page in h1 tag

  Scenario: REQ-UI-10 The following text should be visible on the Home page in <p> tag: "This site is dedicated to perform some exercises and demonstrate automated web testing."
    Given This URL 'http://uitest.duodecadits.com'
    When I check the Page Paragraph
    Then The expeted text should be visible on the Home page in p1 tag