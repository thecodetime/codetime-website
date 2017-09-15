var assert = require('assert');
var cheerio = require('cheerio');
var fs = require('fs');

describe('Home page', () => {
  const indexPage = fs.readFileSync('index.html', 'utf8');
  const $ = cheerio.load(indexPage);

  it('should have the main logo', (done) => {
    const imgSrc = $('img').attr('src');
    assert(/codetime\.svg/.test(imgSrc));
    done();
  });

  it('should have the title text', (done) => {
    assert.equal($('h1').text(), "It's a good time to Code!");
    done();
  });

  it('should have the footer text', (done) => {
    assert.equal($('footer p').text(), 'Happy Coding!');
    done();
  });

});
