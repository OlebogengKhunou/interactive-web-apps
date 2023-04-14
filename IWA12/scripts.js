// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
//Book 1
const   stat      = document.querySelector('#book1 .status  ').style.color = STATUS_MAP.overdue.color
const  reserve    = document.querySelector('#book1 .reserve ').disabled    = STATUS_MAP.overdue.canReserve
const  checkout   = document.querySelector('#book1 .checkout').disabled    = STATUS_MAP.overdue.canCheckout
const checkcolor  = document.querySelector('#book1 .checkin ').style.color = 'Lightgray'
const  checkin    = document.querySelector('#book1 .checkin ').disabled    = STATUS_MAP.overdue.canCheckIn

//Book2
const   stat1     = document.querySelector('#book2 .status  ').style.color = STATUS_MAP.reserved.color
const  reserve1   = document.querySelector('#book2 .reserve ').disabled    = STATUS_MAP.reserved.canReserve
const  checkout1  = document.querySelector('#book2 .checkout').disabled    = STATUS_MAP.reserved.canCheckout
const checkcolor1 = document.querySelector('#book2 .checkin ').style.color = 'black'
const  checkin1   = document.querySelector('#book2 .checkin ').disabled    = STATUS_MAP.reserved.canCheckIn

//Book3
const   stat2     = document.querySelector('#book3 .status  ').style.color = STATUS_MAP.shelf.color
const  reserve2   = document.querySelector('#book3 .reserve ').disabled    = STATUS_MAP.shelf.canReserve
const  checkout2  = document.querySelector('#book3 .checkout').disabled    = STATUS_MAP.shelf.canCheckout
const checkcolor2 = document.querySelector('#book3 .checkin ').style.color = 'black'
const  checkin2   = document.querySelector('#book3 .checkin ').disabled    = STATUS_MAP.shelf.canCheckIn





// Original 

/*
status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

status = selector(status)
reserve = selector(reserve)
checkout = selector(checkout)
checkin = selector(checkin)

checkin.0.color = none
status.0.style.color = STATUS_MAP.status.color
reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
*/