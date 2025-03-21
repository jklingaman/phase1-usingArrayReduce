const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let initVal = 0;

const totalBatteries = batteryBatches.reduce((countNum, currentNum) => countNum + currentNum, initVal);

