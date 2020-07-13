Feature: All website Pages
  Covering all website Pages by Global Requirements with Test Scenarios

  Scenario: REQ-UI-01 The Title should be "UI Testing Site" on every site
    Given Url 'http://uitest.duodecadits.com/'
    When I check Home site title
    Then I should see the expected site title on the Home Page

  Scenario: REQ-UI-02 The Company Logo should be visible on every site
    Given Website URL 'http://uitest.duodecadits.com/'
    When I check the Home site logo
    Then I should see the expected site logo on the Home Page