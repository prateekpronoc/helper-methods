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

This method indexify the array of JSON object by the attribute of JSON object and return unique result.

```js
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

### Indexify

This method indexify the array of json object based upon the request attributes of json object.

```js
var data = var data = [{
      'id': 1,
      'user': 'barney',
      'active': false
    }, {
      'id': 2,
      'user': 'fred',
      'active': false
    }];

 helperMehtods.indexify(data,'id','user');
 //result
 ==> {1:'barney',2:'fred'};
```

### JsonToArray

This method convert json object to array

```js
var data = {
            'id': 1,
            'user': 'barney',
            'active': false
        };
 helperMethods.jsonToArray(data);
 //result
 // [{ 'id': 1},{ 'user': 'barney' },{ 'active': false }]       
```

### ObjectDifference

```js
var object1 = { 'user': 'barney', 'age': 36, 'active': true },
object2 = { 'user': 'Prateek',   'age': 50, 'active': false };
helperMethods.objectDifference(object1,object2);
//result
//=> object of barney


var object1 = { 'user': 'barney', 'age': 36, 'active': true },
object2 = { 'user': 'Prateek',   'age': 50, 'active': false }
helperMethods.objectDifference(object1,object2,['age']);
//result
//=> object of Prateek with only age {age:50};

var object1 = { 'user': 'barney', 'age': 36, 'active': true },
object2 = { 'user': 'Prateek',   'age': 50, 'active': false }
helperMethods.objectDifference(object1,object2,['user','age']);
//result
//=> object of barney {user:'barney',age:36};
```