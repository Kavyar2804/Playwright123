import {test, expect} from '@playwright/test'


test('asymteric matchers', async() => {

    const user = {
  id: 1,
  name: "Kavya",
  email: "kavya@example.com",
  age: 25,
  score: 95.5,
  roles: ["admin", "editor"],
  address: {         // nested object
    city: "Singapore",
    zip: "123456"
  }
};

//expect.any

// Matches any value of a specified type (Number, String, Boolean, Object, Function, etc.)

// Useful when you don’t care about the actual value, only its type.



 expect(user.id).toEqual(expect.any(Number))
 expect(user.name).toEqual(expect.any(String))
 expect(user.address).toEqual(expect.any(Object))

 //expect.anything
//  Matches any value except null or undefined

// You don’t care about type or exact value, only existence

 expect(user.id).toEqual(expect.anything())

//  expect.arrayContaining
// Checks that an array contains certain elements

// Order does not matter, extra elements are allowed

 expect(user.roles).toEqual(expect.arrayContaining(['admin']))

// expect.arrayOf()
//  ensures all elements in an array match a type or structure
//  expect(user.roles).toEqual(expect.arrayOf(expect.any(String)))
//  expect(user.roles).toEqual(expect.arrayOf(expect.any(String))); // all items are strings

//  expect.closeTo()
// expect(user.score).toBeCloseTo(96,0.5)  //toBeCloseTo(expected, precision) 

expect(user).toEqual(expect.objectContaining({name:'Kavya',address:expect.objectContaining({zip: "123456"})}))

expect(user.email).toEqual(expect.stringContaining('@'))

expect(user.email).toEqual(expect.stringMatching(/@example\.com$/))

});