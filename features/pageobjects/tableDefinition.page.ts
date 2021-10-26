import {
  relationAddButtonLocator,
  relationDropdownLocator,
  relationLocator,
} from "../../locators";
import TableListPage from "./tableList.page";

class TableDefinitionPage extends TableListPage {
  get tableDefinitionLabel() {
    return $("//div[text()='Table definitions']");
  }

  async addNewRelation(nameRelation: string) {
    const btnAdd = await relationAddButtonLocator(nameRelation);
    await this.clickElement(btnAdd);
  }

  async isRelationDisplayed() {
    const btnAdd = await relationLocator("has many");
    return await this.isElementDisplayed(btnAdd);
  }

  async addNewRowRelation(nameRelation: string, index: number, value: string) {
    const row = await relationDropdownLocator(nameRelation, index);
    await this.clickElement(row);
    await this.sendkeysElement(row, value, true);
    await this.waitCompleteProgressBar();
  }

  async deleteRowRelation(nameRelation: string, index: number) {
    const row = await relationDropdownLocator(nameRelation, index);
    await this.clickElement(`${row}/*[local-name() = 'svg']`);
    await this.waitCompleteProgressBar();
  }

  async checkRowRelationValueDisplay(
    nameRelation: string,
    index: number,
    value: string
  ) {
    const row = await relationDropdownLocator(nameRelation, index);
    return await $(`${row}//div[text()='${value}s']`).isDisplayed();
  }
}

export default new TableDefinitionPage();
