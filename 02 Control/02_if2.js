function test1(num) {
    if(num > 7) //  you can chose to omit the '{ }' if using a single sentence inside the control structure
        console.log(num) // this!
    console.log('the end') // but not this one
    }

test1(6)
test1(8)

console.log('-=-')

function  test2(num) {
    if(num > 7); { //   beware not to use ';' with control structures
        console.log(num)
    }
}

test2(6)
test2(8)