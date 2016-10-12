/* global chai */
chai.should();

describe('<expr-splash-screen>', () => {
  let exprApp;

  beforeEach(() => {
    document.querySelector('#fixture').create();
    exprApp = document.querySelector('expr-splash-screen');
  });

  afterEach(() => {
    document.querySelector('#fixture').restore();
  });

  it('should render title', () => {
    const title = exprApp.querySelector('h1').textContent;
    title.should.eql('exprsjo splash screen');
  });
});
