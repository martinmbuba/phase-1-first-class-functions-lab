// Return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// Return the last two drivers from an array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// Array of the two driver-selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function that returns a fare-multiplying function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// Fare-doubling function
const fareDoubler = createFareMultiplier(2);

// Fare-tripling function
const fareTripler = createFareMultiplier(3);

// Function that selects different drivers using the provided function
function selectDifferentDrivers(drivers, driverSelectorFn) {
  return driverSelectorFn(drivers);
}
