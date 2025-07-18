// Error handling in JavaScript can be tricky, especially when it comes to throwing and catching errors

function treatErrorAndThrow(error) { // This function is used to handle errors and throw them in a specific format
    // throw new Error('404 not found'); // throw new TypeError('This is a type error');
    // throw 10; // throw true; // throw 'message'; // These are examples of throwing different types of errors
    // throw true; // throw 10; // throw new Error('This is an error'); // throw new TypeError('This is a type error');
    // throw 'message'; // throw new Error('This is an error'); // throw new TypeError('This is a type error');
    throw { // This is an example of throwing an object with specific properties
        name: error.name, // 'name' is the name of the error, 'message' is the error message, and 'date' is the date when the error occurred
        msg: error.message, //  'msg' is the error message, and 'date' is the date when the error occurred
        date: new Date // 'date' is the date when the error occurred
    }
}

function printNameScreaming(obj) { // This function attempts to print the name property of an object in uppercase
    // If the 'name' property does not exist, it will throw an error
    try {
        console.log(obj.nome.toUpperCase() + '!!!'); //  the error is here, where 'nome' is used instead of 'name'
    } catch (err){
        treatErrorAndThrow(err); // This will handle the error and throw it in a specific format
    } finally {
        console.log('Failed to print name in Upper Case'); // This will always execute, regardless of whether an error occurred or not
    }
}

const obj = { name: 'Robert' }; // This is an object with a 'name' property, which will cause an error in the printNameScreaming function
printNameScreaming(obj); // The function will attempt to print the name in uppercase, but if it fails, it will handle the error and print a message