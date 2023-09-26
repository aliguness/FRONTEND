// Var Let Const

var catName="Tekir";

// string name="Engin";

var hasOwner=true;

var number=45;

function getName(catName,kedininSahibi){
    return `${catName}: ${kedininSahibi}`;
}

const myCat=getName(catName,"Engin Ertikmen");

// console.log(myCat);

function menuGetir(corba,araSicak,anaYemek,catalSayisi){
    return `${corba},${araSicak},${anaYemek},${catalSayisi}`;
}


var corba2="Yayla";
var araSicak1=true;
var araSicak2="Dolma";
var anaYemek1="İskender";
var anaYemek2="Kebap";
var catalSayisi1=5




var menuEngin=menuGetir(85,araSicak1,anaYemek1,catalSayisi1);
var menuAli=menuGetir(corba2,araSicak2,anaYemek2,"Alinin en sevdiği yemek");

// console.log(menuEngin);
// console.log(menuAli);


abc();

function abc(){

    // console.log(" Ali (yaratılmadan önce):",a);
    console.log(" Engin (yaratılmadan önce):",e);

    if(true){
        var a="Ali";
        let e="Engin";
        console.log(" Ali (scope içinde):",a);
        console.log(" Engin (scope içinde):",e);
    }
    // console.log(" Ali (scope dışında):",a);
    // console.log(" Engin (scope dışında):",e);
    
    

}





