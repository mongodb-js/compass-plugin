const chai = require('chai');
const sinonChai = require('sinon-chai');

require('jsdom-global')();

global.sinon = require('sinon');
global.expect = chai.expect;

chai.should();
chai.use(sinonChai);