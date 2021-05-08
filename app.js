const fs = require('fs');


genders = ["m", "f"];
maleNames = ["Marek", "Janusz", "Viktor", "Dawid", "Jan", "Mateusz", "Karol", "Tymek"];
femaleNames = ["Anna", "Zofia", "Krystyna", "Dominika", "Aneta", "Martyna", "Julia", "Jowita"];
lastNames = ["Osinski", "Spencer", "Keebler", "Jast", "Hessel", "Botsford", "Predovic", "Oma"];

function getRandomAge(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randChoice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }


  const randomPerson = (genders, maleNames, femaleNames, lastNames) => {
      const persons = [];

      for(let i = 0; i < 20; i++){
        const person = {
          gender: '',
          firstName: '',
          lastName: '',
          age: '',
        }
        person.gender = randChoice(genders);

        if (person.gender === "m") {
          person.firstName = randChoice(maleNames);
        } else if (person.gender === "f"){
          person.firstName  = randChoice(femaleNames);
        } 
        else alert ("not found");

        person.lastName = randChoice(lastNames);
        person.age = getRandomAge(18,78); 

        persons[i] = person;
        console.log(persons);
      }
      return persons;
  };
  const data = JSON.stringify(randomPerson(genders, maleNames, femaleNames, lastNames));

  fs.writeFile('people.json', data, (err) => {
    if (err) throw err;
    console.log('File has been successfully generated! Check people.json');
  });