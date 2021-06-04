const parseValue = (value: number): boolean => (!value || value < 0);

export const calcConsumption = (
  consumption: number,
  speed: number,
): number => consumption * (1.009 ** (speed - 1));

export const travelTime = (
  distance: number,
  speed:number,
): number => (distance / (speed / 60));

export const formatMinutes = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const minuteModulo = minutes % 60;
  const min = Math.floor(minuteModulo);
  const seconds = Math.floor((minuteModulo - Math.floor(min)) * 60);

  const hourString = (hours !== 0) ? `${hours}h ` : '';
  const minuteString = (min !== 0) ? `${min}min ` : '';
  const secondString = (seconds !== 0) ? `${seconds}s` : '';

  return hourString + minuteString + secondString;
};

export const formatTravelTime = (distance: number, speed: number): string => {
  if (parseValue(distance) || parseValue(speed)) {
    return '';
  }

  const minutes = travelTime(distance, speed);
  return formatMinutes(minutes);
};

export const calcTotalConsumption = (
  distance: number,
  consumption: number,
  speed: number,
): string => {
  if (parseValue(distance) || parseValue(speed) || parseValue(consumption)) {
    return '';
  }

  return ((calcConsumption(consumption, speed) / 100) * distance).toFixed(2);
};

export const calcConsumptionDifference = (
  distance: number,
  consumption: number,
  speedA: number,
  speedB: number,
): string => {
  if (parseValue(distance) || parseValue(speedA) || parseValue(consumption) || parseValue(speedB)) {
    return '';
  }

  const consA = ((calcConsumption(consumption, speedA) / 100) * distance);
  const consB = ((calcConsumption(consumption, speedB) / 100) * distance);
  return `+${Math.abs(consA - consB).toFixed(2)}`;
};

export const calcTimeDifference = (distance: number, speedA: number, speedB: number) => {
  if (parseValue(distance) || parseValue(speedA) || parseValue(speedB)) {
    return '';
  }

  const travelTimeA = travelTime(distance, speedA);
  const travelTimeB = travelTime(distance, speedB);
  const timeDifference = (travelTimeA - travelTimeB);

  return `-${formatMinutes(Math.abs(timeDifference))}`;
};
