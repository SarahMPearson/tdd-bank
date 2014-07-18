/*global describe it */
'use strict';

var expect = require('chai').expect;
var Bank = require('../../app/models/bank.js');


  describe('Bank', function(){
    describe('constructor', function(){
      it('should create a new Bank', function(){
        var chase = new Bank('Chase');
        expect(chase).to.equal('Chase');
        expect(chase).to.be.instanceof(Bank);
        expect(chase.accounts).to.have.length(0);
      });
    });
  }):
