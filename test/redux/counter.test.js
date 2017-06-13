'use strict'

const expect = require('chai').expect
const counter = require('../../src/redux/counter')

describe('counter',()=>{
    it('test case', () => {
        expect(counter(0,{type:'INCREMENT'})).to.equal(1)
        expect(counter(1,{type:'INCREMENT'})).to.equal(2)
        expect(counter(2,{type:'DECREMENT'})).to.equal(1)
        expect(counter(1,{type:'DECREMENT'})).to.equal(0)
        expect(counter(1,{type:'SOMETHINGELSE'})).to.equal(1)
    })
})