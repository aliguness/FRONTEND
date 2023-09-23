// variable
// camelCase
var catName = "Soda";

// boolean
// camelCase
var hasOwner = true;

// function
// camelCase
function getName(catName, ownerName) {
  return `${catName}: ${ownerName}`;
}

const myCat = getName(catName, "Afife Betul");
console.log(myCat);

// constant
// UPPER_SNAKE_CASE
const DAYS_UNTIL_TOMMOROW = 1;

// class
// PascalCase
class CatProps {
  constructor(catName, ownerName) {
    this.catName = catName;
    this.ownerName = ownerName;
  }

  setCatColor(color) {
    this.color = color;
  }

  addNewProps(props) {
    this[props.key] = props.value;
  }

  // private
  // underscore
  _getOwner() {
    return this.ownerName;
  }
}

var myCat1 = new CatProps(catName, "Afife Betül");
myCat1.setCatColor("red");
myCat1.addNewProps({ key: "width", value: 123 });

console.log(myCat1);

// component
// PascalCase
function CatInfos({ name }) {
  return (
    <div>
      <span>Cat Name:</span>
      <span>{name}</span>
    </div>
  );
}