const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = 0
let customers = '1'
const location1 = 'RSA'
let currency = ''
let shoes = 300 * 1
let toys = 100 * 5
let shirts = 150 * NONE_SELECTED
let batteries = 35 * 2
let pens = 5 * NONE_SELECTED
let stock = shoes + batteries + pens + shirts + toys;

if (location1 === 'RSA') {
    currency = 'R'

    if (stock < 1000) {
        shipping = 400
        console.log('Price : ', currency, stock + shipping)
    }
    else if (stock >= 1000 && customers < 2) {
        shipping = 0
        console.log('Price : ', currency, stock + shipping)
    }
    else if (customers !== 1) {
        console.log(FREE_WARNING)
    }
}

if (location1 === 'NAM') {
    currency = '$'

    if (stock < 1000) {
        shipping = 600
        console.log('Price : ', currency, stock / 17 + shipping)
    }
    else if (stock >= 1000 && customers < 2) {
        shipping = 0
        console.log('Price : ', currency, (stock + shipping) / 17)
    }
    else if (customers !== 1) {
        console.log(FREE_WARNING)
    }
}

if (location1 === 'Other') {
    currency = '$'
    shipping = 800
    console.log('Price : ', currency, stock / 17 + shipping)

}

if (location1 === 'NK') {
    console.log(BANNED_WARNIN)
}
