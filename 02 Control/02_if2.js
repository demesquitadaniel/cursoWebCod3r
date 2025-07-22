// Control structures in JavaScript
// if statement (2)

function test1(num) {
    if(num > 7) //  you can chose to omit the '{ }' if using A SINGLE SENTENCE inside the control structure
        console.log(num) // this one sentence will execute if the condition is true, without the need for '{ }'
    console.log('the end') // but not this one. The fact that it is outside the 'if' means it will always execute
    // beware not to use ';' with control structures, as it will terminate the 'if
    }

test1(6); // this will not print 6, as the condition is false but WILL print 'the end'
test1(8); // this will print 8 and 'the end'

console.log('--------');

function  test2(num) {
    if(num > 7); { //   beware not to use ';' with control structures with multiple sentences, as it will terminate the 'if'
        console.log(num)
    }
}

test2(6); // this will not print 6, as the condition is false
test2(8); // this will print 8
