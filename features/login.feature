Feature: Login functionality

  Scenario: Successful login with email and password
    Given I am on the login page
    When I enter a valid email and password
    And I click the login button
    Then I should be redirected to the onboarding

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the login page
    When I enter an invalid email or password
    And I click the login button
    Then I should see an error message

  Scenario: Unsuccessful login with valid username and invalid password
    Given I am on the login page
    When I enter a valid username and an invalid password
    And I click the login button
    Then I should see an error message

  Scenario: Unsuccessful login with invalid username and valid password
    Given I am on the login page
    When I enter an invalid username and a valid password
    And I click the login button
    Then I should see an error message

  Scenario: Unsuccessful login with corrupted email
    Given I am on the login page
    When I enter a corrupted email and a valid password
    And I click the login button
    Then I should see an error message indicating invalid email format

  Scenario: Unsuccessful login with invalid username and invalid password
    Given I am on the login page
    When I enter an invalid username and an invalid password
    And I click the login button
    Then I should see an error message

  Scenario: Unsuccessful login with blank fields
    Given I am on the login page
    When I leave the email and password fields blank
    And I double click the login button
    Then I should see an error message indicating required fields

  Scenario: Password visibility toggle
    Given I am on the login page
    When I enter a password
    And I click the eye icon to show the password
    Then the password should be visible
    When I click the eye icon again to hide the password
    Then the password should be hidden

  Scenario: Successful click on sign up button
    Given I am on the login page
    When I click the sign up button
    Then I should be redirected to the sign-up page

  Scenario: Successful click on forget password button
    Given I am on the login page
    When I click the forget password button
    Then I should be redirected to the forgot password page