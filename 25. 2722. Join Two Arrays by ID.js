/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let obj={};
    for(let i of arr1){
        obj[i.id]=i
    }

    for (let i of arr1) {
        obj[i.id]=i
    }
    for(let i of arr2) {
        obj[i.id] = obj[i.id]?{...obj[i.id],...i}:i
    }
    return Object.values(obj)
};
