let sinif = ["Ali", "Aysu", "Aminenur", "Gizem", "Orhun", "Osman", "Salih"];
const numbers = [49, 1, 52, 67, 33, 200, 120];

// * FOREACH
sinif.forEach((value, index, array) => {
    console.log(value);
    console.log(index);
    console.log(array);
});

// * MAP
const yeniSinif =sinif.map((value, index, array) => {
    return `${value} array'in ${index}. elemanıdır`;
});
// console.log(yeniSinif);

// * FILTER
const filterCB =(value, index, array) =>{
    return value.lenght >=5;
}
// REDUCE
const newSinif = sinif.reduce((string,value)=>{
    return `${string}, ${value}`;
});

console.log(newSinif);