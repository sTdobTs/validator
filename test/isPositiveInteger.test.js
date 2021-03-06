
const isPositiveInteger = require('../src/isPositiveInteger');
const chai = require('chai');
const should = chai.should;

chai.use(require('chai-things'));
should();

describe('isPositiveInteger', function () {
  // .3
  it(`isPositiveInteger(.3) === false`, function () {
    isPositiveInteger(.3).should.equal(false);
  });

  // 3
  it(`isPositiveInteger(3) === true`, function () {
    isPositiveInteger(3).should.equal(true);
  });

  // 3.
  it(`isPositiveInteger(3.) === true`, function () {
    isPositiveInteger(3.).should.equal(true);
  });

  // 3.3
  it(`isPositiveInteger(3.3) === false`, function () {
    isPositiveInteger(3.3).should.equal(false);
  });

  // '.3'
  it(`isPositiveInteger('.3') === false`, function () {
    isPositiveInteger('.3').should.equal(false);
  });

  // '3'
  it(`isPositiveInteger('3') === true`, function () {
    isPositiveInteger('3').should.equal(true);
  });

  // '3.'
  it(`isPositiveInteger('3.') === false`, function () {
    isPositiveInteger('3.').should.equal(false);
  });

  // '3.3'
  it(`isPositiveInteger('3.3') === false`, function () {
    isPositiveInteger('3.3  ').should.equal(false);
  });

  // .3
  it(`isPositiveInteger(.3, {isStrict: true}) === false`, function () {
    isPositiveInteger(.3, {isStrict: true}).should.equal(false);
  });

  // 3
  it(`isPositiveInteger(3, {isStrict: true}) === true`, function () {
    isPositiveInteger(3, {isStrict: true}).should.equal(true);
  });

  // 3.
  it(`isPositiveInteger(3., {isStrict: true}) === true`, function () {
    isPositiveInteger(3., {isStrict: true}).should.equal(true);
  });

  // 3.3
  it(`isPositiveInteger(3.3, {isStrict: true}) === false`, function () {
    isPositiveInteger(3.3, {isStrict: true}).should.equal(false);
  });

  // '.3'
  it(`isPositiveInteger('.3', {isStrict: true}) === false`, function () {
    isPositiveInteger('.3', {isStrict: true}).should.equal(false);
  });

  // '3'
  it(`isPositiveInteger('3', {isStrict: true}) === false`, function () {
    isPositiveInteger('3', {isStrict: true}).should.equal(false);
  });

  // '3.'
  it(`isPositiveInteger('3.', {isStrict: true}) === false`, function () {
    isPositiveInteger('3.', {isStrict: true}).should.equal(false);
  });

  // '3.3'
  it(`isPositiveInteger('3.3', {isStrict: true}) === false`, function () {
    isPositiveInteger('3.3', {isStrict: true}).should.equal(false);
  });

  // 0
  it(`isPositiveInteger(0) === false`, function () {
    isPositiveInteger(0).should.equal(false);
  });

  // 0.
  it(`isPositiveInteger(0.) === false`, function () {
    isPositiveInteger(0.).should.equal(false);
  });

  // .0
  it(`isPositiveInteger(.0) === false`, function () {
    isPositiveInteger(.0).should.equal(false);
  });

  // 0.0
  it(`isPositiveInteger(0.0) === false`, function () {
    isPositiveInteger(0.0).should.equal(false);
  });

  // '0'
  it(`isPositiveInteger('0') === false`, function () {
    isPositiveInteger('0').should.equal(false);
  });

  // '0.'
  it(`isPositiveInteger('0.') === false`, function () {
    isPositiveInteger('0.').should.equal(false);
  });

  // '.0'
  it(`isPositiveInteger('.0') === false`, function () {
    isPositiveInteger('.0').should.equal(false);
  });

  // '0.0'
  it(`isPositiveInteger('0.0') === false`, function () {
    isPositiveInteger('0.0').should.equal(false);
  });

  // '.'
  it(`isPositiveInteger('.') === false`, function () {
    isPositiveInteger('.').should.equal(false);
  });

  // 0
  it(`isPositiveInteger(0, {isStrict: true}) === false`, function () {
    isPositiveInteger(0, {isStrict: true}).should.equal(false);
  });

  // '0'
  it(`isPositiveInteger('0', {isStrict: true}) === false`, function () {
    isPositiveInteger('0', {isStrict: true}).should.equal(false);
  });

  // -.3
  it(`isPositiveInteger(-.3) === false`, function () {
    isPositiveInteger(-.3).should.equal(false);
  });

  // -3
  it(`isPositiveInteger(-3) === false`, function () {
    isPositiveInteger(-3).should.equal(false);
  });

  // -3.
  it(`isPositiveInteger(-3.) === false`, function () {
    isPositiveInteger(-3.).should.equal(false);
  });

  // -3.3
  it(`isPositiveInteger(-3.3) === false`, function () {
    isPositiveInteger(-3.3).should.equal(false);
  });

  // '-.3'
  it(`isPositiveInteger('-.3') === false`, function () {
    isPositiveInteger('-.3').should.equal(false);
  });

  // '-3'
  it(`isPositiveInteger('-3') === false`, function () {
    isPositiveInteger('-3').should.equal(false);
  });

  // '-3.'
  it(`isPositiveInteger('-3.') === false`, function () {
    isPositiveInteger('-3.').should.equal(false);
  });

  // '-3.3'
  it(`isPositiveInteger('-3.3') === false`, function () {
    isPositiveInteger('-3.3').should.equal(false);
  });

  // '--3'
  it(`isPositiveInteger('--3') === false`, function () {
    isPositiveInteger('--3').should.equal(false);
  });

  // '-3-3'
  it(`isPositiveInteger('-3-3') === false`, function () {
    isPositiveInteger('-3-3').should.equal(false);
  });

  // -.3
  it(`isPositiveInteger(-.3, {isStrict: true}) === false`, function () {
    isPositiveInteger(-.3, {isStrict: true}).should.equal(false);
  });

  // -3
  it(`isPositiveInteger(-3, {isStrict: true}) === false`, function () {
    isPositiveInteger(-3, {isStrict: true}).should.equal(false);
  });

  // -3.
  it(`isPositiveInteger(-3., {isStrict: true}) === false`, function () {
    isPositiveInteger(-3., {isStrict: true}).should.equal(false);
  });

  // -3.3
  it(`isPositiveInteger(-3.3, {isStrict: true}) === false`, function () {
    isPositiveInteger(-3.3, {isStrict: true}).should.equal(false);
  });

  // '-.3'
  it(`isPositiveInteger('-.3', {isStrict: true}) === false`, function () {
    isPositiveInteger('-.3', {isStrict: true}).should.equal(false);
  });

  // '-3'
  it(`isPositiveInteger('-3', {isStrict: true}) === false`, function () {
    isPositiveInteger('-3', {isStrict: true}).should.equal(false);
  });

  // '-3.'
  it(`isPositiveInteger('-3.', {isStrict: true}) === false`, function () {
    isPositiveInteger('-3.', {isStrict: true}).should.equal(false);
  });

  // '-3.3'
  it(`isPositiveInteger('-3.3', {isStrict: true}) === false`, function () {
    isPositiveInteger('-3.3', {isStrict: true}).should.equal(false);
  });

  // ''
  it(`isPositiveInteger('') === false`, function () {
    isPositiveInteger('').should.equal(false);
  });

  // '   '
  it(`isPositiveInteger('   ') === false`, function () {
    isPositiveInteger('   ').should.equal(false);
  });

  // null
  it(`isPositiveInteger(null) === false`, function () {
    isPositiveInteger(null).should.equal(false);
  });

  // undefined
  it(`isPositiveInteger(undefined) === false`, function () {
    isPositiveInteger(undefined).should.equal(false);
  });

  // NaN
  it(`isPositiveInteger(NaN) === false`, function () {
    isPositiveInteger(NaN).should.equal(false);
  });

  // Infinity
  it(`isPositiveInteger(Infinity) === false`, function () {
    isPositiveInteger(Number.POSITIVE_INFINITY).should.equal(false);
  });

  // -Infinity
  it(`isPositiveInteger(-Infinity) === false`, function () {
    isPositiveInteger(Number.NEGATIVE_INFINITY).should.equal(false);
  });

  // Object(3)
  it(`isPositiveInteger(Object(3)) === true`, function () {
    isPositiveInteger(Object(3)).should.equal(true);
  });

  // Object('3')
  it(`isPositiveInteger(Object('3')) === true`, function () {
    isPositiveInteger(Object('3')).should.equal(true);
  });

  // Object(3)
  it(`isPositiveInteger(Object(3), {isStrict: true}) === true`, function () {
    isPositiveInteger(Object(3), {isStrict: true}).should.equal(true);
  });

  // Object('3')
  it(`isPositiveInteger(Object('3'), {isStrict: true}) === false`, function () {
    isPositiveInteger(Object('3'), {isStrict: true}).should.equal(false);
  });

  // Object(-3)
  it(`isPositiveInteger(Object(-3)) === false`, function () {
    isPositiveInteger(Object(-3)).should.equal(false);
  });

  // Object('-3')
  it(`isPositiveInteger(Object('-3')) === false`, function () {
    isPositiveInteger(Object('-3')).should.equal(false);
  });

  // Object(-3)
  it(`isPositiveInteger(Object(-3), {isStrict: true}) === false`, function () {
    isPositiveInteger(Object(-3), {isStrict: true}).should.equal(false);
  });

  // Object('-3')
  it(`isPositiveInteger(Object('-3'), {isStrict: true}) === false`, function () {
    isPositiveInteger(Object('-3'), {isStrict: true}).should.equal(false);
  });
});
