import { When, Then } from "@wdio/cucumber-framework";
import tableDefinitionPage from "../pageobjects/tableDefinition.page";

Then(/^I should see Table definition page$/, async () => {
  await expect(tableDefinitionPage.tableDefinitionLabel).toBeExisting();
});

Then(/^I check table with name (.*) displayed$/, async (nameTable) => {
  await expect(
    await tableDefinitionPage.checkTableDisplay(nameTable)
  ).toBeTruthy();
});

When(/^I delete table with name (.*)$/, async (nameTable) => {
  await tableDefinitionPage.deleteTable(nameTable);
});

Then(/^I check relation area not displayed$/, async () => {
  expect(await tableDefinitionPage.isRelationDisplayed()).toBeFalsy();
});

When(/^I add new table with name (.*)$/, async (nameTable) => {
  await tableDefinitionPage.addNewtable(nameTable);
  // await tableDefinitionPage.selectTable(nameTable);
  // await tableDefinitionPage.selectCheckbox("Allow authentication");
  // await tableDefinitionPage.addNewRelation("has many");
  // await tableDefinitionPage.addNewRowRelation("has many", 1, "table_001");
  // let value = await tableDefinitionPage.checkRowRelationValueDisplay(
  //   "has many",
  //   1,
  //   "table_001"
  // );
  // await expect(value).toBeTruthy();
  // await tableDefinitionPage.deleteRowRelation("has many", 1);
  // value = await tableDefinitionPage.checkRowRelationValueDisplay(
  //   "has many",
  //   1,
  //   "table_001"
  // );
  // await expect(value).toBeFalsy();
});
