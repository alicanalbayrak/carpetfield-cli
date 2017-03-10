import { CarpetfieldClientPage } from './app.po';

describe('carpetfield-client App', () => {
  let page: CarpetfieldClientPage;

  beforeEach(() => {
    page = new CarpetfieldClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
