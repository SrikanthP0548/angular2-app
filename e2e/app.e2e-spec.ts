import { StudentListPage } from './app.po';

describe('student-list App', () => {
  let page: StudentListPage;

  beforeEach(() => {
    page = new StudentListPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
