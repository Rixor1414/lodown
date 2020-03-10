'use strict';

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;
//typeof: Determine the type of value the parameter is.
//@param {Any value} val: The value to determine the type of.
//@return {string}: A string that reads as the type of value the parameter is.

function typeOf(val){
    if (val === null){
        return "null"
    }else if (val === undefined){
        return 'undefined'
    }else if (Array.isArray(val)=== true){
        return 'array'
    }else if (typeof val === "number"){
        return "number"
    }else if (typeof val === 'boolean'){
        return "boolean"
    }else if (typeof val === 'object'){
        return 'object'
    }else if (typeof val === 'function'){
        return 'function'
    }else {
        return 'string'
    }
}
module.exports.typeOf = typeOf;

//first: Return the first however many values in an array specified in the parameters.
//@param {An array} arr: The array to splice
//@param {Number} num: the number of elements in the array you want to return
//@return {Array}: The (arr) value but with just the first (num) elements
function first(arr, num){
    if (Array.isArray(arr) === false){
        return []
    }else if (!num){
        return arr[0]
    }else if (num < 0){
        return []
    }else if (num > arr.length){
        return arr
    }else {
        return arr.slice(0,num)
    }
}
module.exports.first = first;
//last: Return the last however many values in an array specified in the parameters.
//@param {Array} arr: The array to splice
//@param {Number} num : the number of elements in the array you want to return
//@return  {Array}: The (arr) value but with just the last (num) elements

function last(arr,num){
    if (Array.isArray(arr) === false){
        return []
    }else if (!num){
        return arr[arr.length-1]
    }else if(num < 0){
        return []
    }else if (num > arr.length){
        return arr
    }else {
        return arr.slice(-num,arr.length)
    }
}
module.exports.last = last;
//indexof: Find the index of the first instance of (val) in (arr)
//@param {Array} arr: The array to iterate through
//@param {Number} num: The number to check for in (arr)
//@return {Number}: The index of the first instance of (num) in (arr)

function indexOf(arr,val){
    var dupe = false
    for (var i=0; i < arr.length; i++){
        if (arr[i] === val && dupe === false){
            dupe = true
            return i
        }else if (i === arr.length-1 && dupe === false){
            return -1
        }
    }
    
}
module.exports.indexOf = indexOf;
//contains: Determine weather or not an array contains a value
//@param {Array} arr: The array to check
//@param {Any value}: The value to check in the array for
//@return {Boolean}: True if the value is in the array, false otherwise.

function contains(arr, val){
    for (var i=0; i < arr.length; i++){
        if (arr[i] === val){
            return true
        }else if (i >= arr.length-1){
            return false
        }
    }
}
module.exports.contains = contains;

//each: Execute the function (funct) on every value in the collection
//@param {Array or object} coll: The array or object to run the function on
//@param {Function} funct: The function to call on the colection
function each(coll, funct){
    if (Array.isArray(coll)=== true){
        for (var i=0; i < coll.length; i++){
            funct(coll[i], i, coll)
        }
    }else {
        for (var key in coll){
            funct(coll[key], key, coll)
        }
    }
}
module.exports.each = each;
//filter: Filter out every element in an array if the function didn't return true for that element.
//@param {Array} arr: The array to iterate through
//@param {Function} funct: The function to call on every element in the array
//@return {Array}: The new filtered array

function filter(arr, funct){
    var newarr = []
    for (var i=0; i < arr.length; i++){
            if (funct(arr[i],i,arr)){
                newarr.push(arr[i])
            }
            
        }
        return newarr
}
module.exports.filter = filter;
//map: Call a function on every element in a collection, then return an array containing the results
//@param {Array or object} coll: The collection to run the function on
//@param {Function} funct: THe function to call on the collection
//@return {Array}: An array containing the results of each time the function was called.
function map(coll, funct){
    var newarr = []
    if (Array.isArray(coll) === true){
        for (var i = 0; i < coll.length; i++){
            newarr.push(funct(coll[i], i, coll) )
        }
    }else if (typeof coll === 'object'){
        for (var key in coll){
            newarr.push(funct(coll[key], key, coll))
        }
    }
    return newarr
}
module.exports.map = map;
//reject: The reverse of filter, determine which elements in an array to filter out, then return the filtrered out values.
//@param {Array} arr: The array to iterate through
//@param {Function} funct: The function to call on the array
//@return {Array}: An array containing every value in arr that returned false when the function was called.
function reject(arr, funct){
    var newarr = []
    for (var i = 0; i < arr.length; i++){
        if(funct(arr[i], i, arr) === false){
            newarr.push(arr[i])
        }
    }
    return newarr
}
module.exports.reject = reject;
//partition: Determine which values were truthy and which values were falsy
//@param {Array} arr: The array to iterate through
//@param {Function} funct: The function to call on the array
//@return {Array with 2 sub arrays}: An array with 2 sub arrays, the first one containing the truthy values for the function call and the 2nd one containing the falsy values.
function partition(arr, funct){
    var tru = []
    var fals = []
    for (var i = 0; i<arr.length; i++){
        if (funct(arr[i], i, arr)){
            tru.push(arr[i])
        }else {
            fals.push(arr[i])
        }
    }
            var newarr = [tru, fals]
        return newarr
}
module.exports.partition = partition;
//every: Determine weather or not every element in an array or object returns true for a function
//@param {Array or object} coll: The collection to iterate through.
//@param {Function} funct: The function to call on every element in the collection
//@return {Boolean}: Return true if the function returns true for every element in the collection, false if even one of them returns false. Return true for truthy and false for falsy if there is no function.
function every(coll, funct){
    debugger;
    var result = []    
    if (!funct && coll){
        for (var i = 0; i<coll.length;i++){
            if (coll[i]){
                return true
            }else {
                return false
            }
        }
    }else if (!funct && !coll){
        return false
    }
    if (coll === undefined || coll === null){
        return false
    }
    if (Array.isArray(coll)){
        for (var i = 0; i<coll.length; i++){
            result.push(funct(coll[i], i, coll))
        }
    }else {
        for (var key in coll){
            result.push(funct(coll[key], key, coll))
        }
    }
    if (result.includes(false)){
        return false
    }else {
        return true
    }
}
module.exports.every = every;
//some: Determine weather or not a collection has at least one value that returns true for a function
//@param {Array or Object} coll: The collection to iterate through
//@param {Function} funct: The function to call on every element in the collection
//@return {Boolean}: Return true if at least of the elements in the array returns true for the function, false otherwise. If no function is provided, return true for truthy values, false for falsy values.
function some(coll, funct){
    var result = []    
    if (!funct && coll){
        for (var i = 0; i<coll.length;i++){
            if (coll[i]){
                return true
            }else {
                return false
            }
        }
    }else if (!funct && !coll){
        return false
    }
    if (coll === undefined || coll === null){
        return false
    }
    if (Array.isArray(coll)){
        for (var i = 0; i<coll.length; i++){
            result.push(funct(coll[i], i, coll))
        }
    }else {
        for (var key in coll){
            result.push(funct(coll[key], key, coll))
        }
    }
    if (result.includes(true)){
        return true
    }else {
        return false
    }
}
module.exports.some = some;
//pluck: Determine the value of a given property in an array.
//@param {Array of objects} arr: The array to run the function "map" on
//@param {Property} prop: The property to pluck out of the array of objects
//@return {Array}: An array containing the value of property of every element in the array
function pluck(arr, prop){
    return map(arr, function (obj){
        return obj[prop]
    });
    
}
module.exports.pluck = pluck;