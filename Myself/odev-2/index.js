const constants = [2.72, 3.14, 9.81, 37, 100];
const [E, pi, gForce, humanBodyTemp, waterBoilingTemp] = constants;
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];

const [fin, est, sw, den, nor] = countries;

const rectangle = { width: 20, height: 10, area: 200, perimeter: 60 };

const { width, height, area, perimeter } = rectangle;

const users = [
  { name: "Brook", scores: 75, skills: ["HTM", "CSS", "JS"], age: 16 },
  { name: "Alex", scores: 80, skills: ["HTM", "CSS", "JS"], age: 18 },
  { name: "David", scores: 75, skills: ["HTM", "CSS"], age: 22 },
  { name: "John", scores: 85, skills: ["HTML"], age: 25 },
  { name: "Sara", scores: 95, skills: ["HTM", "CSS", "JS"], age: 26 },
  { name: "Martha", scores: 80, skills: ["HTM", "CSS", "JS"], age: 18 },
  { name: "Thomas", scores: 90, skills: ["HTM", "CSS", "JS"], age: 20 }];
  
for (const user of users) {
  const { name, scores, skills, age } = user;
  console.log(Object.keys(user)+" "+Object.values(user));
}
for(let i=0; i<users.length;i++){
    console.log(users[i]);
}

const lessSkilledUsers = users.filter((user) => user.skills.length < 2);
console.log(lessSkilledUsers);


const countriesData = {
  Finland: { capital: "Helsinki", population: 5521698, language: "Finnish" },
  Estonia: { capital: "Tallinn", population: 1324820, language: "Estonian" },
  Sweden: { capital: "Stockholm", population: 10365705, language: "Swedish" },
  Denmark: { capital: "Copenhagen", population: 5793636, language: "Danish" },
  Norway: { capital: "Oslo", population: 5391369, language: "Norwegian" },
};

for (const [country, { capital, population, language }] of Object.entries(
  countriesData
)) {
  console.log(
    `Country: ${country}, Capital: ${capital}, Population: ${population}, Language: ${language}`
  );
}

const student = ["David", ["HTML", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [firstName, skills, [htmlScore, cssScore, jsScore, reactScore]] = student;
console.log(firstName, skills, htmlScore, cssScore, jsScore, reactScore);


function convertArrayToObject(array) {
  return array.map((student) => {
    const [name, skills, scores] = student;
    return {
      name,
      skills,
      scores,
    };
  });
}
const students = [
  ["David", ["HTML", "CSS", "JS", "REACT"], [98, 85, 90, 95]],
  ["John", ["HTML", "CSS", "JS", "REACT"], [85, 80, 85, 80]],
];
console.log(convertArrayToObject(students));

const student2 = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

const newStudent2 = { ...student2 };

newStudent2.skills.frontEnd.push({ skill: "Bootstrap", level: "8" });

newStudent2.skills.backEnd.push({ skill: "Express", level: "9" });

newStudent2.skills.dataBase.push({ skill: "SQL", level: "8" });

newStudent2.skills.dataScience.push("SQL");

console.log(newStudent2);