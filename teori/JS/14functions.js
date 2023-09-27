const orhun = {
  name: "Orhun",
  surname: "Bayındır",
  date: 1995,
  town: "Ankara",
  // method
  getInfo: function () {
    console.log(`${this.name}'un doğum yılı ${this.date}`);
  },
};

function getOrhunsInfo() {
  for (const key in orhun) {
    const value = orhun[key];
    console.log(`${key}: ${value}`);
  }
}

const getOrhunsLife = function () {
  printDescription();
  getOrhunsInfo();
  orhun.getInfo();
};

// * Arrow Function ES6
const printDescription = () => {
  console.log("Orhun'un özellikleri:");
};

getOrhunsLife();

// * Hungarian Notation
// ! bunu tercih etmiyoruz
const numberGetLength = () => {
  return 5;
};