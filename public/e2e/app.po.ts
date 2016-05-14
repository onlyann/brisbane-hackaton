export class Ng2HackatonPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-hackaton-app h1')).getText();
  }
}
