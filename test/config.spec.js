const chai = require('chai');
const config = require('./../src/config.js');

const expect = chai.expect;

/** @test {config} */
describe('App config', () => {
  /** @test {config#environment} */
  it("The 'env' variable should be 'dev' or 'production'", () => {
    expect(config.env).be.oneOf(['dev', 'production']);
  });

  /** @test {config#port} */
  it("The 'port' setup should be whith in 1025 and 65534", () => {
    expect(config.port).to.be.within(1025, 65534);
  });

  /** @test {config#CORS} */
  it("The 'CORS' setup Should be boolean", () => {
    expect(config.cors).to.be.a('boolean');
  });

  /** @test {config#logOutput} */
  it('Should have a logOutput defined', () => {
    expect(config.logOutput).exist;
  });

  /** @test {config#errorOutput} */
  it('Should have a errorOutput defined', () => {
    expect(config.errorOutput).exist;
  });
});
