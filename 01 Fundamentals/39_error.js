function treatErrorAndThrow(error) {
    // throw new Error('404 not found')
    // throw 10
    // throw true
    // throw 'message'
    throw {
        name: error.name,
        msg: error.message,
        date: new Date
    }
}

function printNameScreaming(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!!!') //  the error is here, where 'nome' is used instead of 'name'
    } catch (e){
        treatErrorAndThrow(e)
    } finally {
        console.log('done')
    }
}

const obj = { name: 'Robert' }
printNameScreaming(obj)