/* global expect */

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
    const title = exprApp.querySelector('.title').textContent;
    expect(title).to.eql('exprsjo');
  });

  it('should render subtitle', () => {
    const subtitle = exprApp.querySelector('.subtitle').textContent;
    expect(subtitle).to.eql('Open your photo library');
  });

  it('should render library path input inside container', () => {
    const input = libraryPathContainer().querySelector('.input-library-path');
    expect(input).to.be.ok;
  });

  it('should render "browse" button inside container', () => {
    const button = libraryPathContainer().querySelector('.button-browse');
    expect(button).to.be.ok;
  });

  function libraryPathContainer() {
    return exprApp.querySelector('.container-library-path');
  }
});
