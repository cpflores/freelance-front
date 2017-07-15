import { FreelanceFrontPage } from './app.po';

describe('freelance-front App', () => {
  let page: FreelanceFrontPage;

  beforeEach(() => {
    page = new FreelanceFrontPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
