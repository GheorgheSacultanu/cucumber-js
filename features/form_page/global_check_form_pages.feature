Feature: All website Pages
  Covering all website Pages by Global Requirements with Test Scenarios

  Scenario: REQ-UI-01 The Title should be "UI Testing Site" on every site
    Given Form Page URL 'http://uitest.duodecadits.com/form.html'
    When I check Form site title
    Then I should see the expected site title on the Form Page

  Scenario: REQ-UI-02 The Company Logo should be visible on every site
    Given Url Form Page 'http://uitest.duodecadits.com/form.html'
    When I check the Form site logo
    Then I should see the expected site logo on the Form Page