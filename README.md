# helper-methods

[![Coverage Status](https://coveralls.io/repos/github/prateekpronoc/helper-methods/badge.svg?branch=master)](https://coveralls.io/github/prateekpronoc/helper-methods?branch=master) [![Build Status](https://travis-ci.org/prateekpronoc/helper-methods.svg?branch=master)](https://travis-ci.org/prateekpronoc/helper-methods)


The collection of javascript methods to ease developers job.


## Installation

`npm install helper-methods -S/-D`

## Usage

```
var helperMethods = require('helper-methods');

var indexifiesObject = helperMethods.indexifyArray([{ id: 91, value: 'India' }, { id: 1, value: 'USA' }],'id');

```

## Output

```
{ 1: { id: 1, value: 'USA' }, 91: { id: 91, value: 'India'}};	
```
