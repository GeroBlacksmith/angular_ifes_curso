import { IdeasPage } from './app.po';

describe('ideas App', () => {
  let page: IdeasPage;

  beforeEach(() => {
    page = new IdeasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
