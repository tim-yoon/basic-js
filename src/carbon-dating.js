const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }

  const num = Number(sampleActivity);
  const k = 0.693 / HALF_LIFE_PERIOD;

  if (!num || num > MODERN_ACTIVITY || num < 0) {
    return false;
  }

  const log = Math.log(MODERN_ACTIVITY / num);
  return Math.ceil(log / k);
};
