import {test} from '@playwright/test'

test.beforeAll('',()=>{

console.log('before all');


})

test.beforeEach('', () => {

    console.log('before each');
    
});

test.afterEach('', () => {
    console.log('after each');
});

test.afterAll('', () => {

    console.log('after all');
    
});

test('test1', () => {

    console.log('test1');
    
});

test('test2', () => {
    console.log('test2');
});