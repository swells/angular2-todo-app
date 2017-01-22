import { browser, element, by } from 'protractor';

export class Angular2TodoAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('todo-app h1')).getText();
  }
}
