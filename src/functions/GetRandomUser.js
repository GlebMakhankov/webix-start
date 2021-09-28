import getRandomIntInclusive from "./GetRandomInt";

export default function getRandomUser() {
  const users = [
    { name: "John Smith", age: 50, country: "USA" },
    { name: "Albert Huji", age: 23, country: "United Kingdom" },
    { name: "Jan Lewandowski", age: 37, country: "Poland" },
    { name: "Sam Smith", age: 20, country: "Japan" },
    { name: "Frank Pinata", age: 87, country: "Italy" },
  ];
  return users[getRandomIntInclusive(0, users.length - 1)];
}
