/*
 * handlebarstest
 * https://github.com/foxdm2/handlebarstest
 *
 * Copyright (c) 2019, 
 * Licensed under the MIT license.
 */

'use strict';

var chai = require('chai'),
    expect = chai.expect;

chai.should();

var handlebarstest = require('../lib/handlebarstest.js');

describe('handlebarstest module', function() {
    describe('#awesome()', function() {
        it('should return a hello', function() {
            expect(handlebarstest.awesome('livia')).to.equal('hello livia');
        });
    });
});
