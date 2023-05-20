{
    {
        {
            {
                var willItBe = 'Will It Be????'
                console.log(willItBe)
            }
        }
    }
}
console.log(willItBe)

// A VARiable created inside a function, makes it visiblçe ONLY inside that function.
function test() {
    var local = 123
    console.log(local)
}

test()
console.log(local)