
const isPlainObject = require('../src/isPlainObject');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isPlainObject', function () {
  // {}
  it(`isPlainObject({}) === true`, function () {
    isPlainObject({}).should.equal(true);
  });

  // []
  it(`isPlainObject([]) === false`, function () {
    isPlainObject([]).should.equal(false);
  });

  // function
  it(`isPlainObject(parseInt) === false`, function () {
    isPlainObject(parseInt).should.equal(false);
  });

  // new Date
  it(`isPlainObject(new Date()) === false`, function () {
    isPlainObject(new Date()).should.equal(false);
  });

  // Object('3')
  it(`isPlainObject(Object('3')) === false`, function () {
    isPlainObject(Object('3')).should.equal(false);
  });

  // Object([])
  it(`isPlainObject(Object([])) === false`, function () {
    isPlainObject(Object([])).should.equal(false);
  });

  // Object({})
  it(`isPlainObject(Object({})) === true`, function () {
    isPlainObject(Object({})).should.equal(true);
  });

  // null
  it(`isPlainObject(null) === false`, function () {
    isPlainObject(null).should.equal(false);
  });

  // Object.create(null)
  it(`isPlainObject(Object.create(null)) === true`, function () {
    isPlainObject(Object.create(null)).should.equal(true);
  });
});
