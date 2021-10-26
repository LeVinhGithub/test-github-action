import { checkboxInputLocator, checkboxLabelLocator } from "../../locators";

export default class Page {
  get btnSave() {
    return $("//button[text()='Save']");
  }

  get btnCancel() {
    return $("//button[text()='Cancel']");
  }

  get turboLinkProgressBar() {
    return $(".turbolinks-progress-bar");
  }

  get turboLinkProgressBarList() {
    return $$(".turbolinks-progress-bar");
  }

  open(env: string) {
    browser.maximizeWindow();
    return browser.url(env);
  }

  async waitCompleteProgressBar() {
    await browser.pause(1000);
    await browser.waitUntil(
      async () => (await this.turboLinkProgressBarList.length) === 0,
      { timeout: 10000, timeoutMsg: "Progress bar not complete!!!" }
    );
  }

  async selectMenu(nameMenu: string) {
    const ele = `//ul/li/a[text()='${nameMenu}']`;
    await this.clickElement(ele);
    await this.waitCompleteProgressBar();
  }

  async isCheckboxChecked(label: string) {
    const checkbox = await checkboxInputLocator(label);
    return $(checkbox).isSelected();
  }

  async isCheckboxDisable(label: string) {
    this.selectCheckbox(label);
    return (await this.isCheckboxChecked(label)) === false;
  }

  async selectCheckbox(label: string, isChecked: boolean = true) {
    const status = await this.isCheckboxChecked(label);
    if (status != isChecked) {
      this.clickElement(label);
      await this.waitCompleteProgressBar();
    }
  }

  async clickElement(locator: string) {
    const ele = $(locator);
    await ele.waitForDisplayed();
    await ele.waitForClickable();
    await ele.click();
  }

  async sendkeysElement(
    locator: string,
    value: string,
    isEnter: boolean = false
  ) {
    const ele = $(locator);
    await ele.waitForDisplayed();
    await ele.waitForClickable();
    await ele.click();
    await browser.keys(value);
    if (isEnter) await browser.keys("\uE007");
  }

  async isElementDisplayed(locator: string) {
    return (await $$(locator).length) > 0;
  }
}
