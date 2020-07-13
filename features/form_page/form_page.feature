Feature: Form Page
  Covering all Form Page Requirements by Test Scenarios

  Scenario: REQ-UI-05 When I click on the Form button, I should get navigated to the Form page
    Given Form URL Link 'http://uitest.duodecadits.com/form.html'
    When I click on the From button
    Then I should get navigated to the Form page

  Scenario: REQ-UI-11 On the Form page, a form should be visible with one input box and one submit button
    Given URL Form Link 'http://uitest.duodecadits.com/form.html'
    When I navigate to the Form Page
    Then The input box and submit button should be visible

  Scenario: REQ-UI-12 On the Form page, if you type <value> the input field and submit the form, you should get redirect to the Hello page, and the following text should appear: <result>
    Given Link to Form Page 'http://uitest.duodecadits.com/form.html'
    When I type any value in the text field
    And I click on Submit Button
    Then I should get redirect to the Hello Page with the introduced text displayed in the page

   Scenario: REQ-UI-06 When I click on the Form button, it should turn to active status
    Given URL Page Link to Form 'http://uitest.duodecadits.com/form.html'
    When I navigate to the Form Page to check the status
    Then Than the navigation bar should be visible as the status is active