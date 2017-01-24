//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};

function changeUp (obj) {

obj.name = "dave"
obj.age = 31
obj["hair color"] = "blue"

console.log(obj)
}

changeUp(me)



//2. Iterate over the object to console.log the propery or key names. 

function iter (obj) {

for (var prop in obj) {
console.log(prop)
}


}

iter(me)
