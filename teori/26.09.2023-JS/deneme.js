const ages=[32,31,25,25,29,28,28,28,26,27,31,31,27,27];

function getAges(ages, ...rest){  // ... spread deniyor.
    for ( const age of [...ages, ...rest]){
        console.log(age)
    }

}
getAges(ages, 24,35,26,27,18)