const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

let owed = 'R ' + parseFloat(leoBalance * -1 + sarahBalance * -1).toFixed(2)
owed = owed.replace('13','13 ')
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${leoBalance * -1})\n`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${(sarahBalance * -1).toFixed(2)})\n`
const total = "Total amount owed: "
const result = '\n'+leo + sarah +'\n'+ divider + '\n ' + total + owed + '\n' + divider

console.log(result)
