// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let removedDrivers = []
    removedDrivers.push(drivers[0])
    removedDrivers.push(drivers[1])
    console.log(removedDrivers)
    return removedDrivers
};

const returnLastTwoDrivers = function(drivers) {
    let removedDrivers = []
    removedDrivers.push(drivers[2])
    removedDrivers.push(drivers[3])
    console.log(removedDrivers)
    return removedDrivers
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function(multiplier) {
    return function (fare) {
        return multiplier * fare
    }
}

const fareDoubler = function(fare) {
    return  createFareMultiplier(2)(fare)
}

const fareTripler = function(fare) {
    return  createFareMultiplier(3)(fare)
}

const selectDifferentDrivers = function (drivers, funct) {
    return funct(drivers)
}
    
