// insert number
document.getElementById("selectNumber").innerHTML = prompt('กรุณากรอกหมายเลขที่ต้องการ 1-99 | please insert your number 1-99')
// console.log(lotteryNumber)

// random number to win lottery
// console.log(Math.floor(Math.random() * 100))

document.getElementById("result").innerHTML = Math.floor(Math.random() * 100)

