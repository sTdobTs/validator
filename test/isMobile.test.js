
const isMobile = require('../src/isMobile');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isMobile', function () {
  // '18505505933'
  it(`isMobile('18505505933') === true`, function () {
    isMobile('18505505933').should.equal(true);
  });

  // '28505505933'
  it(`isMobile('28505505933') === false`, function () {
    isMobile('28505505933').should.equal(false);
  });

  // '185055059334'
  it(`isMobile('185055059334') === false`, function () {
    isMobile('185055059334').should.equal(false);
  });

  // '1850550593'
  it(`isMobile('1850550593') === false`, function () {
    isMobile('1850550593').should.equal(false);
  });

  // '1850550 933'
  it(`isMobile('1850550 933') === false`, function () {
    isMobile('1850550 933').should.equal(false);
  });

  // '1850550-933'
  it(`isMobile('1850550-933') === false`, function () {
    isMobile('1850550-933').should.equal(false);
  });

  // 18505505933
  it(`isMobile(18505505933) === false`, function () {
    isMobile(18505505933).should.equal(false);
  });

  // '18505505933'
  it(`isMobile('18505505933', 'en-US') === false`, function () {
    isMobile('18505505933', 'en-US').should.equal(false);
  });
});
