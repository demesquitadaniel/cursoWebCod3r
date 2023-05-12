let isActive = false;
console.log(isActive);

isActive = true;
console.log(isActive);
console.log(!isActive); //  '!' denies, negate, the expression evaluated.

isActive = 1;
console.log(isActive);
console.log(!!isActive); // '!!' gets the expression back to its original state: true.

console.log('---------------------------');
console.log('the truths...');
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!!'text');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isActive = true));

console.log('---------------------------');
console.log('the falses...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isActive = false));

console.log('---------------------------');
console.log('toFinish...');
console.log(!!('' || null || 0 || 'wow' || 123));
// '' is false, null is false, '0' is false, but any string is true, which makes this expression a true testament.

let naming = '';
console.log(naming || 'Unknown');

naming = 'Lucas';
console.log(naming || 'Unknown');