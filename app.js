const os = require('os');
const fs = require('fs');

const genders = ['M', 'F']
const maleNames = ['Jan', 'Marcin', 'Mirosław', 'Karol', 'Dawid']
const femaleNames = ['Julia', 'Matylda', 'Agata', 'Izdya', 'Karolina']
const lastNames = ['Kropisz', 'Turnal', 'Maciaszek', 'Tworek', 'Piórek']

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const people = [];

for (let i=0; i < 20; i++) {
  const gender = randChoice(genders);
  const firstName = gender === 'M' ? randChoice(maleNames) : randChoice(femaleNames);
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;

  const person = {
    gender,
    firstName,
    lastName,
    age
  };

  people.push(person);
}

const jsonData = JSON.stringify(people, null, 2);

fs.writeFile('people.json', jsonData, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
