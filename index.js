const drivers = [];
const extendedDrivers = [];

function driversWithRevenueOver(drivers, amount) {
   return drivers.filter(driver => driver.revenue > amount);
}

function driverNamesWithRevenueOver(drivers, amount) {
    const newDrivers = drivers.filter(driver => driver.revenue > amount);
    return newDrivers.map(d => d.name)
}

function exactMatch() {

}

function exactMatchToList() {

}
