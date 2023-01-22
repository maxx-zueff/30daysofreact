const emptyArr = Array();
const sevenArr = Array(7).fill(0);

let sevenArr_length = sevenArr.length;
let sevenArr_first = sevenArr[0],
    sevenArr_last = sevenArr[sevenArr_length-1],
    sevenArr_middle = sevenArr[3];

console.log(sevenArr_first, sevenArr_middle, sevenArr_last);

const mixedDataTypes = [1, "one", true, null, undefined, 0];
console.log(mixedDataTypes.length);

const itCompanies = [
    "Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"
];

console.log(itCompanies);
console.log(itCompanies.length);
console.log(itCompanies[0], itCompanies[3], itCompanies[itCompanies.length-1]);
console.log(
    itCompanies[0],
    itCompanies[1],
    itCompanies[2],
    itCompanies[3],
    itCompanies[4],
    itCompanies[5],
    itCompanies[6]
);

const itCompaniesBig = Array(7);

itCompaniesBig[0] = itCompanies[0].toUpperCase();
itCompaniesBig[1] = itCompanies[1].toUpperCase();
itCompaniesBig[2] = itCompanies[2].toUpperCase();
itCompaniesBig[3] = itCompanies[3].toUpperCase();
itCompaniesBig[4] = itCompanies[4].toUpperCase();
itCompaniesBig[5] = itCompanies[5].toUpperCase();
itCompaniesBig[6] = itCompanies[6].toUpperCase();

console.log(
    itCompaniesBig[0],
    itCompaniesBig[1],
    itCompaniesBig[2],
    itCompaniesBig[3],
    itCompaniesBig[4],
    itCompaniesBig[5],
    itCompaniesBig[6]
);

console.log(itCompanies.join(", "));

console.log(itCompanies.includes("Apple") ? "Apple" : "Not Found");

const itCompanies_oo = Array();
for (let index = 0; index < itCompanies.length; index++) {
    const element = itCompanies[index];
    
    let letterFirst = element.indexOf("o");
    let letterLast = element.lastIndexOf("o");

    if (letterFirst != letterLast) itCompanies_oo.push(element); 
}
console.log(itCompanies_oo);

console.log(itCompanies.sort());
console.log(itCompanies.reverse());
console.log(itCompanies.slice(3));
console.log(itCompanies.slice(0,itCompanies.length-3));
console.log(itCompanies.slice(3,4));
console.log(itCompanies);
console.log(itCompanies.shift(), itCompanies);
console.log(itCompanies.splice(2,2), itCompanies);
console.log(itCompanies.pop(), itCompanies);
console.log(itCompanies.splice(0), itCompanies);