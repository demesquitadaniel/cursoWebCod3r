const clientName = 'Rebeca';
const concatenation = 'Hello ' + clientName  + '!';
const template = `
    Hello
    ${clientName}!`

console.log(concatenation, template);

// expressions:
console.log(`1 + 1 = ${1 + 1}`);

const up = text => text.toUpperCase();
console.log(`Hey... ${up('careful')}!`);