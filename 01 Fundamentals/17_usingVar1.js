{
    {
        {
            {
                var youDontSay = "You don't say"
                console.log(youDontSay)
            }
        }
    }
}
console.log(youDontSay)

// A VARiable created inside a function, makes it visible ONLY inside that function.
function test() {
    var local = 123
    console.log(local)
}

test()
console.log(local) // This will throw an error because 'local' is not defined outside the function: "local is not defined"