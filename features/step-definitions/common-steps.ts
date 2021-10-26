import { Given, Then, When } from "@wdio/cucumber-framework";
import { environments } from "../../config";
import { credential } from "../../constants";
import loginPage from "../pageobjects/login.page";
import tableDefinitionPage from "../pageobjects/tableDefinition.page";

Given(/^I am login on (.*) env$/, async (env: string) => {
  await loginPage.open(environments[env]);
  await loginPage.login(credential[env].username, credential[env].password);
});

When(/^I click the menu (.*)$/, async (nameMenu: string) => {
  await loginPage.selectMenu(nameMenu);
});

Then(/^I check checkbox with name (.*) is disable$/, async (name) => {
  await expect(await tableDefinitionPage.isCheckboxDisable(name)).toBeTruthy();
});
