import { JsonblogPage } from './app.po';

describe('jsonblog App', () => {
  let page: JsonblogPage;

  beforeEach(() => {
    page = new JsonblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
