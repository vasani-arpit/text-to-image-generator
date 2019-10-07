#!/usr/bin/env node

//Grab provided args
const [,, ...args] = process.argv

//Print hello world with arguments
console.log(`Hello world ${args}`)