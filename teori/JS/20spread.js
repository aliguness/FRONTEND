// * array kopyalama
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
console.log("arr1 ?== arr2", arr1 === arr2);
console.log("arr1 ?= arr2", arr1 == arr2);

const arr3 = [3, 4, 5];
const arr4 = [...new Set([...arr1, ...arr3])];
console.log(arr4);

// * object kopyalama
const obj1 = { lang: "en", origin: "latin" };
const obj2 = { ...obj1 };
console.log("obj1 ?== obj2", obj1 === obj2);
console.log("obj1 ?= obj2", obj1 == obj2);

const obj3 = { lang: "de", country: "Germany" };
const obj4 = { ...obj1, ...obj3, city: "Berlin" };
console.log(obj4);