import { NgBeDemosPage } from './app.po';

describe('ng-be-demos App', function() {
  let page: NgBeDemosPage;

  beforeEach(() => {
    page = new NgBeDemosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
