/**

Ćwiczenie 3

Ćwiczenie:
  Uzupełnij treść poniższych funkcji wraz z ich typowaniem.
*/

interface User {
  type: 'user',
  name: string,
  languages: string[],
}

interface Admin {
  type: 'admin',
  name: string,
  role: string,
}

type Person = User | Admin;

const peoples: Person[] = [
  {
    name: 'Jan',
    type: 'user',
    languages: ['php', 'js'],
  },
  {
    name: 'Marek',
    type: 'admin',
    role: 'security'
  },
];

function isUser(person) {
  // your code
}

function isAdmin(person) {
  // your code
}

function showIntro(person: Person): void {
  let additionalInformation: string = '';
  if (isUser(person)) {
    additionalInformation = person.languages.join(',');
  }
  if (isAdmin(person)) {
    additionalInformation = person.role;
  }
  console.log(`${person.name} - ${additionalInformation}`);
}