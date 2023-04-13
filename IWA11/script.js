// script.js

//Order 1
const firstOrder = document.querySelector('[data-key="order1"]')
const firstBiscuits = firstOrder.getAttribute('data-biscuits')
const firstDonuts = firstOrder.getAttribute('data-donuts')
const firstPancakes = firstOrder.getAttribute('data-pancakes')
const firstDelivery = firstOrder.getAttribute('data-delivered')

document.querySelector('.biscuits .count').innerText = firstBiscuits
document.querySelector('.donuts .count').innerText = firstDonuts
document.querySelector('.pancakes .count').innerText = firstPancakes
document.querySelector('.status dd').innerText = firstDelivery

//Order 2

const secondOrder = document.querySelector('[data-key="order2"]')
const secondBiscuits = secondOrder.getAttribute('data-biscuits')
const secondDonuts = secondOrder.getAttribute('data-donuts')
const secondPancakes = secondOrder.getAttribute('data-pancakes')
const secondDelivery = secondOrder.getAttribute('data-delivered')

document.querySelector('[data-key="order2"] .biscuits .count').innerText = secondBiscuits
document.querySelector('[data-key="order2"] .donuts .count').innerText = secondDonuts
document.querySelector('[data-key="order2"] .pancakes .count').innerText = secondPancakes
document.querySelector('[data-key="order2"] .status dd').innerText = secondDelivery

//Order 3

const thirdOrder = document.querySelector('[data-key="order3"]')
const thirdBiscuits = thirdOrder.getAttribute('data-biscuits')
const thirdDonuts = thirdOrder.getAttribute('data-donuts')
const thirdPancakes = thirdOrder.getAttribute('data-pancakes')
const thirdDelivery = thirdOrder.getAttribute('data-delivered')

document.querySelector('[data-key="order3"] .biscuits .count').innerText = thirdBiscuits
document.querySelector('[data-key="order3"] .donuts .count').innerText = thirdDonuts
document.querySelector('[data-key="order3"] .pancakes .count').innerText = thirdPancakes
document.querySelector('[data-key="order3"] .status dd').innerText = thirdDelivery





// Original Code

// const 1-root = document(order1),
// const 1-biscuits: document(biscuits),
// const 1-donuts: document(donuts),
// const 1-pancakes: document(pancakes),
// const 1-status: document(status)

// const 2-root = document(order2),
// const 2-biscuits: document(biscuits),
// const 2-donuts: document(donuts),
// const 2-pancakes: document(pancakes),
// const 2-status: document(status)

// const 3-root = document(order3),
// const 3-biscuits: document(biscuits),
// const 3-donuts: document(donuts),
// const 3-pancakes: document(pancakes),
// const 3-status: document(status)

// 1-biscuits= 1-root.biscuits,
// 1-donuts = 1-root.donuts,
// 1-pancakes = 1-root.pancakes,
// 1-status = 1-root.status ? Delivered : Pending

// 2-biscuits= 2-root.biscuits,
// 2-donuts = 2-root.donuts,
// 2-pancakes = 2-root.pancakes,
// 2-status = 2-root.status ? Delivered : Pending

// 3-biscuits= 3-root.biscuits,
// 3-donuts = 3-root.donuts,
// 3-pancakes = 3-root.pancakes,
// 3-status = 3-root.status ? Delivered : Pending