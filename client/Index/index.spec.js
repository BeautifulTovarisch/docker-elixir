// Edit add function to make test pass!

import React  from 'react';
import render from 'react-test-renderer';

const add = ( a, b ) => a + b;

test( 'it should add two numbers', () => {
    expect( add( 1, 2 ) ).toBe( 3 );
});

test( 'it should work with negative numbers', () => {
    expect( add( 1, -2 ) ).toBe(-1 );
});
