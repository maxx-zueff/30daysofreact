const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
]

countries.includes("Ethiopia")  ?
console.log("ETHIOPIA") : countries.push("Ethiopia")

console.log(countries)

// ---

console.log(countries.slice(0,10))

// ---

function isInteger(num) {
  return num % 1 == 0;
}
let medium_countries = countries.length / 2;

isInteger(medium_countries)
  ? console.log("mid " + (countries[medium_countries] + " " + countries[medium_countries - 1]))
  : console.log("mid" , countries[Math.trunc(medium_countries)]);

// ---

  if (isInteger(medium_countries)) {
  
  let countries_first = countries.slice(0, medium_countries);
  let countries_second = countries.slice(medium_countries);
  console.log(medium_countries)
  console.log(countries_first)
  console.log(countries_second)
} else {
  let countries_first = countries.slice(0, Math.trunc(medium_countries+1));
  let countries_second = countries.slice(Math.trunc(medium_countries+1));
  console.log(medium_countries)
  console.log(countries_first)
  console.log(countries_second)
}
  
