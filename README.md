# helper-methods

[![Coverage Status](https://coveralls.io/repos/github/prateekpronoc/helper-methods/badge.svg?branch=master)](https://coveralls.io/github/prateekpronoc/helper-methods?branch=master) [![Build Status](https://travis-ci.org/prateekpronoc/helper-methods.svg?branch=master)](https://travis-ci.org/prateekpronoc/helper-methods)


The collection of javascript methods to ease developers job.


## :electric_plug: Installation

```javascript

npm install helper-methods -S/-D

```

 ##  Usage

```javascript
var helperMethods = require('helper-methods');

var indexifiesObject = helperMethods.indexifyArray([{ id: 91, value: 'India' }, { id: 1, value: 'USA' }],'id');

```

## Output

```
{ 1: { id: 1, value: 'USA' }, 91: { id: 91, value: 'India'}};	
```

## Using This Module

### How to Use

```javascript
var helperMethods = require('helper-methods');
```

### IndexifyArray

This method indexify the array of JSON object by the attribue of JSON object and return unique result.

```javscript
var data = [{
      'id': 1,
      'user': 'barney',
      'active': false
    }, {
      'id': 2,
      'user': 'fred',
      'active': false
    }];
    
 helperMehtods.indexifyArray(data,'id');
 //result
 ==> {1:{'id':1,'user':'barney','active':false},2:{'id':2,'user':'fred','active':false}} 
```

