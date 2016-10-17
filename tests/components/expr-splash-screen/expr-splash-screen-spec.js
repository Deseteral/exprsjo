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

  it('should render hint', () => {
    const hint = exprApp.querySelector('.hint').textContent;
    expect(hint).to.eql('Open recent libraries');
  });

  it('should render recent library paths list', () => {
    const list = exprApp.querySelector('.list-recent');
    expect(list).to.be.ok;
  });

  it('should render operation buttons', () => {
    const exitButton = exprApp.querySelector('.button-exit').textContent;
    const openButton = exprApp.querySelector('.button-browse').textContent;

    expect(exitButton).to.eql('exit');
    expect(openButton).to.eql('browse');
  });
});
