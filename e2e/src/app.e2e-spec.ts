import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  // @ts-ignore
  beforeEach(() => {
    page = new AppPage();
  });

  // @ts-ignore
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to angular6-ssr-boilerplate!');
  });
});
