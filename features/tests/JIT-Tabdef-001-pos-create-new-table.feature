Feature: JIT_Tabdef_001_create_new_table

  
  Scenario Outline: As a user, I can create new table and check info

    Given I am login on staging env
    When I click the menu Tables
    Then I should see Table definition page

    Examples: 
    | tableName   |
    | table_001 |
