import { Homework1Page } from './app.po';

describe('homework1 App', () => {
  let page: Homework1Page;

  beforeEach(() => {
    page = new Homework1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
