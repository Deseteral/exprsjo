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

  it('should render hints', () => {
    const hints = [...exprApp.querySelectorAll('.subtitle')];
    hints.map((hint) => hint.textContent);

    const expectedHints = [
      'Open your photo library',
      'Open recent libraries'
    ];

    for (let i = 0; i < hints.length; i++) {
      expect(hints[i]).to.eql(expectedHints[i]);
    }
  });

  it('should render library path input inside container', () => {
    const input = libraryPathContainer().querySelector('.input-library-path');
    expect(input).to.be.ok;
  });

  it('should render "browse" button inside container', () => {
    const button = libraryPathContainer().querySelector('.button-browse');
    expect(button).to.be.ok;
  });

  it('should render recent library paths list', () => {
    const list = exprApp.querySelector('.list-recent');
    expect(list).to.be.ok;
  });

  function libraryPathContainer() {
    return exprApp.querySelector('.container-library-path');
  }
});
