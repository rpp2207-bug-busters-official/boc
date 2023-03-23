module.exports = {
  chargeTime: (carInfo) => {

    // car info should look like this:

    // {
    //   batteryCapacity: 54 (in kWh),
    //   chargePower: 23 (in kW)
    //   currentPerecentage: 50%
    // }

    // Formula: charge time = (battery capacity × depth of discharge) ÷ (charge current × charge efficiency)

    return (carInfo.batteryCapacity * carInfo.currentPerecentage ) + (carInfo.chargePower * 0.9)

  }
}