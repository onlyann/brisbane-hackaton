import { Ng2HackatonPage } from './app.po';

describe('ng2-hackaton App', function() {
  let page: Ng2HackatonPage;

  beforeEach(() => {
    page = new Ng2HackatonPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-hackaton works!');
  });
});
