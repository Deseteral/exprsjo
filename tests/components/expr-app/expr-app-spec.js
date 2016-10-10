/* global chai */
chai.should();

describe('<expr-app>', () => {
  let exprApp;

  beforeEach(() => {
    document.querySelector('#fixture').create();
    exprApp = document.querySelector('expr-app');
  });

  afterEach(() => {
    document.querySelector('#fixture').restore();
  });

  it('should render title', () => {
    console.log(exprApp);
    const title = exprApp.querySelector('h1').textContent;
    title.should.eql('exprsjo');
  });
});
