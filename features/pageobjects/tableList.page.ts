import { tableListLocator, tableLocator } from "../../locators";
import Page from "./base.page";

export default class TableListPage extends Page {
  get btnAddTable() {
    return $("//span[text()='Add table']");
  }

  get txtNameTable() {
    return $("ul[data-rbd-droppable-id] input");
  }

  get btnDeleteTable() {
    return $("//button[text()='Delete']");
  }

  async addNewtable(tableName: string) {
    await this.btnAddTable.click();
    await this.txtNameTable.setValue(tableName);
    await this.btnSave.click();
    await this.waitCompleteProgressBar();
  }

  async checkTableDisplay(tableName: string) {
    return $(await tableListLocator(tableName)).waitForDisplayed();
  }

  async checkTableNotDisplay(tableName: string) {
    return $(await tableListLocator(tableName)).waitForDisplayed({
      reverse: true,
    });
  }

  async deleteTable(tableName: string) {
    this.btnAddTable.waitForDisplayed();
    const table = $$(await tableListLocator(tableName));
    if ((await table.length) > 0) {
      await this.selectTable(tableName);
      await this.btnDeleteTable.click();
      await this.waitCompleteProgressBar();
      await this.selectMenu("Tables");
      await this.checkTableNotDisplay(tableName);
    }
  }

  async selectTable(tableName: string) {
    await $(await tableListLocator(tableName)).click();
  }
}
