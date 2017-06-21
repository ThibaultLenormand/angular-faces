import { AngularFacesPage } from './app.po';

describe('angular-faces App', () => {
  let page: AngularFacesPage;

  beforeEach(() => {
    page = new AngularFacesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
