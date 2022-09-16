const assert = require('chai').assert;
const listFibonacci = require('../fibonacci');

describe('Generate fibonacci series', ()=>{
    it('fibonacci of 0', ()=>{
        fibonacci = JSON.stringify(listFibonacci(0))
        assert.equal(fibonacci, JSON.stringify([0,1]))
    })

    it('fibonacci of 1', ()=>{
        fibonacci = JSON.stringify(listFibonacci(1))
        assert.equal(fibonacci, JSON.stringify([0,1]))
    })
    it('fibonacci of 2', ()=>{
        fibonacci = JSON.stringify(listFibonacci(2))
        assert.equal(fibonacci, JSON.stringify([0,1,1]))
    })

    it('fibonacci of 3', ()=>{
        fibonacci = JSON.stringify(listFibonacci(3))
        assert.equal(fibonacci, JSON.stringify([0,1,1,2]))
    })

    it('fibonacci of 4', ()=>{
        fibonacci = JSON.stringify(listFibonacci(4))
        assert.equal(fibonacci, JSON.stringify([0,1,1,2,3]))
    })
    it('fibonacci of 5', ()=>{
        fibonacci = JSON.stringify(listFibonacci(5))
        assert.equal(fibonacci, JSON.stringify([0,1,1,2,3,5]))
    })
})
