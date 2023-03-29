
const chargeTime = (carInfo) => {

  let hours;
  let minutes;
  let seconds;

  let time = (carInfo.batteryCapacity * ((carInfo.desiredCharge / 100 ) - (carInfo.currentPerecentage / 100))) / (carInfo.chargePower * 0.9);

  let split = time.toString().split('.');

  hours = Number(split[0]);
  minutes = (Number(split[1].slice(0, 2)) / 100) * 60;
  seconds = (hours * 3600) + (minutes * 60);

  return seconds;

}

export default chargeTime;