function getWaitingFee(waitingMinutes) {
  return waitingMinutes / 4;
}

function getDistanceFee(distance) {
  if (distance <= 2) {
    return 6;
  }
  return 6 + (distance - 2) * 0.8;
}

function getComebackFee(distance) {
  if (distance <= 8) return 0;
  return (distance - 8) * 0.4;
}

export default function taxiFee(distance, waitingMinutes) {
  const distanceFee = getDistanceFee(distance);
  const waitingFee = getWaitingFee(waitingMinutes);
  const comebackFee = getComebackFee(distance);
  return Math.round(distanceFee + waitingFee + comebackFee);
}
