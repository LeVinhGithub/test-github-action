Feature: JIT_Tabdef_001_create_new_table

  @skip()
  Scenario Outline: As a user, I can create new table and check info

    Given I am login on staging env
    When I click the menu Tables
    Then I should see Table definition page
    When I delete table with name <tableName>
    When I add new table with name <tableName>
    Then I check table with name <tableName> displayed
    When I delete table with name <tableName>

    Examples: 
    | tableName   |
    | table_001 |
