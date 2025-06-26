const clientName = 'Rebeca';
const concatenation = 'Hello ' + clientName  + '!';
const template = `
    Hello
    ${clientName}!` // '${expression}' is a placeholder for expressions. It MUST be between backticks (``) - NOT single quotes ('').

console.log(concatenation, template);

// expressions:
console.log(`1 + 1 = ${1 + 1}`);

const up = text => text.toUpperCase();
console.log(`Hey... ${up('careful')}!`);