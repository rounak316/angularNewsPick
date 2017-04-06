import { NewsPickPage } from './app.po';

describe('news-pick App', () => {
  let page: NewsPickPage;

  beforeEach(() => {
    page = new NewsPickPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
