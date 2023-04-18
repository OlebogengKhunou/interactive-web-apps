let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => {
    const isString = typeof calculated === 'numerical-string'
    const calculatedAsNumber = isString === 'true' ? calculated : parseInt(calculated)
    calculated = calculatedAsNumber + 1
    return calculated
}

const calcUser = () => {
    logCalc()
    if (calculated > 2) {
        user = 'John'
        state = 'requesting'
    }
    if (calculated > 3) {
        state = 'idle'
    }
}

const checkUser = () => {
    if (user === 'John' && state === 'requesting') {
        console.log(`User: ${user} (${calculated})`)
    }
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()